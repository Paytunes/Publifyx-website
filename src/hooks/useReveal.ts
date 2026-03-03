import { useEffect, useRef } from "react";

/**
 * Lightweight CSS-based scroll-reveal hook.
 * Replaces framer-motion whileInView on below-fold sections.
 * Uses IntersectionObserver + CSS transitions (zero JS animation cost).
 *
 * Usage:
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal reveal-delay-1">...</div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport on mount (e.g. above the fold), show immediately
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "-30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Reveal multiple children at once (e.g., a grid of cards).
 * Pass the parent container ref — all children with .reveal class get triggered.
 */
export function useRevealGroup<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll<HTMLElement>(".reveal"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add("reveal-visible"), i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "-20px 0px" }
    );

    if (container) observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
}
