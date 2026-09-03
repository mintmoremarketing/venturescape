import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Runs on every route change:
 *   - if the URL has a hash (e.g. /#about), smooth-scroll to that section
 *     once the target page has rendered
 *   - otherwise scroll instantly to the top of the new page
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the destination page to mount before looking for the anchor.
      const id = hash.replace(/^#/, "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
}
