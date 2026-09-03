import React, { useRef, useState, useCallback } from "react";
import {
  FaCloudUploadAlt,
  FaFileAlt,
  FaFileImage,
  FaFilePdf,
  FaFileArchive,
  FaTrashAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaFileExcel,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FileState = "queued" | "uploading" | "completed" | "failed";

export interface FileEntry {
  id: string;
  file: File;
  progress: number;
  state: FileState;
  error?: string;
}

export interface FileUploadAreaProps {
  title?: string;
  description?: string;
  maxFiles?: number;
  maxSizeMB?: number;
  accept?: string;
  files: FileEntry[];
  onFilesSelect: (files: File[]) => void;
  onFileRemove: (id: string) => void;
  className?: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function FileIcon({ type, name }: { type: string; name: string }) {
  const ext = name.split(".").pop()?.toLowerCase() || "";
  if (type.startsWith("image/")) return <FaFileImage className="h-5 w-5" />;
  if (type === "application/pdf" || ext === "pdf")
    return <FaFilePdf className="h-5 w-5" />;
  if (["xls", "xlsx", "csv"].includes(ext))
    return <FaFileExcel className="h-5 w-5" />;
  if (["zip", "rar", "tar", "gz", "7z"].includes(ext))
    return <FaFileArchive className="h-5 w-5" />;
  return <FaFileAlt className="h-5 w-5" />;
}

function CircularProgress({ progress }: { progress: number }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="h-8 w-8 -rotate-90 transform">
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="transparent"
          stroke="rgba(12,36,72,0.15)"
          strokeWidth="3"
        />
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="transparent"
          stroke="#0C2448"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all"
        />
      </svg>
    </div>
  );
}

export default function FileUploadArea({
  title = "Attach supporting files",
  description = "Spec sheets, PO drafts, drawings, or reference photos.",
  maxFiles = 5,
  maxSizeMB = 10,
  accept,
  files,
  onFilesSelect,
  onFileRemove,
  className,
}: FileUploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const dropped = Array.from(e.dataTransfer.files);
      if (dropped.length > 0) onFilesSelect(dropped);
    },
    [onFilesSelect]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onFilesSelect(Array.from(e.target.files));
      }
      if (fileInputRef.current) fileInputRef.current.value = "";
    },
    [onFilesSelect]
  );

  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <p className="text-sm font-medium text-[#0C2448]">{title}</p>
        <p className="mt-0.5 text-xs text-[#0C2448]/72">{description}</p>
      </div>
      <div
        className={cn(
          "relative flex cursor-pointer flex-col items-center justify-between gap-4 rounded-md border-2 border-dashed p-6 transition-all duration-300 outline-none sm:flex-row",
          isDragging
            ? "border-[#0C2448] bg-[#0C2448]/5"
            : "border-[#0C2448]/20 bg-white hover:border-[#0C2448]/40 hover:bg-[#F7F2EB]/40"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click();
        }}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple={maxFiles > 1}
          accept={accept}
          onChange={handleFileSelect}
          aria-hidden="true"
        />
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div
            className={cn(
              "rounded p-3 transition-colors duration-300",
              isDragging
                ? "bg-[#0C2448]/15 text-[#0C2448]"
                : "border border-[#0C2448]/10 bg-white text-[#0C2448]/72 shadow-sm"
            )}
          >
            <FaCloudUploadAlt className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#0C2448]">
              Drop files here or click to browse
            </p>
            <p className="mt-0.5 text-xs text-[#0C2448]/72">
              Up to {maxFiles} files, {maxSizeMB}MB each
            </p>
          </div>
        </div>
        <Button
          type="button"
          className="bg-brand-gradient pointer-events-none shrink-0 text-white"
        >
          Select files
        </Button>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f) => (
            <div
              key={f.id}
              className="flex items-center gap-4 rounded-md border border-[#0C2448]/8 bg-white p-2 transition-all"
            >
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-md",
                  f.state === "failed"
                    ? "bg-red-50 text-red-600"
                    : f.state === "completed"
                    ? "bg-[#0C2448]/10 text-[#0C2448]"
                    : "bg-[#0C2448]/[0.04] text-[#0C2448]/72"
                )}
              >
                <FileIcon type={f.file.type} name={f.file.name} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#0C2448]">
                  {f.file.name}
                </p>
                <div className="mt-0.5 flex items-center gap-2 text-xs">
                  <span className="font-medium text-[#0C2448]/72">
                    {formatBytes(f.file.size)}
                  </span>
                  {f.error && (
                    <>
                      <span className="text-[#0C2448]/40">•</span>
                      <span className="truncate font-medium text-red-600">
                        {f.error}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                {f.state === "uploading" && (
                  <CircularProgress progress={f.progress} />
                )}
                {f.state === "completed" && (
                  <FaCheckCircle className="size-5 text-[#0C2448]" />
                )}
                {f.state === "failed" && (
                  <FaExclamationCircle className="size-5 text-red-600" />
                )}
                <div className="ml-2 h-6 w-px bg-[#0C2448]/10" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    onFileRemove(f.id);
                  }}
                  className="text-[#0C2448]/72 hover:bg-red-50 hover:text-red-600"
                  aria-label={`Remove ${f.file.name}`}
                >
                  <FaTrashAlt className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
