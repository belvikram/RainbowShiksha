import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef<string>(pathname);
  const navigationKey = useRef<number>(0);

  useEffect(() => {
    // Always scroll to top on pathname change
    if (prevPathname.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "instant" });
      prevPathname.current = pathname;
      navigationKey.current += 1;
    }
  }, [pathname]);

  // Handle hash navigation
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  // Handle same-page link clicks (even if pathname doesn't change)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link) {
        // Check React Router Link's to attribute or href
        let href = link.getAttribute("href") || link.getAttribute("to");
        
        if (href) {
          // Handle HashRouter format (#/path)
          if (href.startsWith("#")) {
            href = href.substring(1);
          }
          
          // Normalize paths (remove trailing slash, hash fragments)
          const normalizedHref = href.replace(/#.*$/, "").replace(/\/$/, "") || "/";
          const currentPath = pathname.replace(/\/$/, "") || "/";
          
          // If clicking on a link to the current page, scroll to top
          if (normalizedHref === currentPath) {
            // Small delay to ensure any navigation completes
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 50);
          }
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

