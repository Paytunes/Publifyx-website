/**
 * Lightweight shim that replaces framer-motion (~119 KB) with no-op equivalents.
 * Vite aliases "framer-motion" → this file so all existing imports keep working.
 *
 * motion.div/span/h1/etc. render plain DOM elements, ignoring animation props.
 * Hooks return inert values so call-sites don't break.
 */

import React, { forwardRef, useRef, useState, useEffect, type ComponentPropsWithRef, type ElementType } from "react";

// ── motion proxy ────────────────────────────────────────────────────────────
// Strips framer-specific props and forwards the rest to a plain element.
const MOTION_PROPS = new Set([
  "initial", "animate", "exit", "whileInView", "whileHover", "whileTap",
  "whileFocus", "whileDrag", "viewport", "transition", "variants",
  "layout", "layoutId", "drag", "dragConstraints", "dragElastic",
  "dragMomentum", "dragTransition", "onAnimationStart", "onAnimationComplete",
  "onViewportEnter", "onViewportLeave", "transformTemplate", "style",
]);

function createMotionComponent(tag: ElementType) {
  return forwardRef<any, any>((props, ref) => {
    const cleaned: Record<string, any> = {};
    for (const key in props) {
      if (!MOTION_PROPS.has(key)) {
        cleaned[key] = props[key];
      }
    }
    // Preserve style — it's a valid HTML prop
    if (props.style) cleaned.style = props.style;
    return React.createElement(tag, { ...cleaned, ref });
  });
}

const motionCache = new Map<string, ReturnType<typeof createMotionComponent>>();

export const motion = new Proxy({} as Record<string, any>, {
  get(_target, tag: string) {
    if (!motionCache.has(tag)) {
      const component = createMotionComponent(tag);
      component.displayName = `motion.${tag}`;
      motionCache.set(tag, component);
    }
    return motionCache.get(tag);
  },
});

// ── AnimatePresence ─────────────────────────────────────────────────────────
// Just renders children — no enter/exit transitions.
export function AnimatePresence({ children }: { children?: React.ReactNode; mode?: string }) {
  return React.createElement(React.Fragment, null, children);
}

// ── useInView ───────────────────────────────────────────────────────────────
// Uses real IntersectionObserver so counters/triggers still work.
export function useInView(
  ref: React.RefObject<Element | null>,
  options?: { once?: boolean; margin?: string }
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once) observer.disconnect();
        } else if (!options?.once) {
          setInView(false);
        }
      },
      {
        rootMargin: options?.margin ?? "0px",
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options?.once, options?.margin]);

  return inView;
}

// ── useScroll ───────────────────────────────────────────────────────────────
// Returns a reactive scrollYProgress (0→1) for a target element.
export function useScroll(options?: {
  target?: React.RefObject<Element | null>;
  offset?: string[];
}) {
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = options?.target?.current;
      if (!el) {
        // Fallback: whole page scroll
        const h = document.documentElement.scrollHeight - window.innerHeight;
        scrollYProgress.set(h > 0 ? window.scrollY / h : 0);
        return;
      }
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight;
      const end = -rect.height;
      const range = start - end;
      const progress = range > 0 ? Math.min(1, Math.max(0, (start - rect.top) / range)) : 0;
      scrollYProgress.set(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [options?.target, scrollYProgress]);

  return { scrollYProgress };
}

// ── useMotionValue ──────────────────────────────────────────────────────────
// Lightweight reactive value with .get()/.set() and subscriber support.
class MotionValue {
  private _value: number;
  private _listeners: Set<(v: number) => void> = new Set();

  constructor(initial: number) {
    this._value = initial;
  }
  get() { return this._value; }
  set(v: number) {
    this._value = v;
    this._listeners.forEach((fn) => fn(v));
  }
  on(_event: string, callback: (v: number) => void) {
    this._listeners.add(callback);
    return () => { this._listeners.delete(callback); };
  }
}

export function useMotionValue(initial: number) {
  const ref = useRef<MotionValue | null>(null);
  if (!ref.current) ref.current = new MotionValue(initial);
  return ref.current;
}

// ── useTransform ────────────────────────────────────────────────────────────
// Maps one MotionValue through an input/output range, returning a new one.
export function useTransform(
  source: MotionValue,
  inputRange: number[],
  outputRange: number[]
): MotionValue {
  const result = useMotionValue(interpolate(source.get(), inputRange, outputRange));

  useEffect(() => {
    return source.on("change", (v) => {
      result.set(interpolate(v, inputRange, outputRange));
    });
  }, [source, inputRange, outputRange, result]);

  return result;
}

function interpolate(value: number, input: number[], output: number[]): number {
  if (input.length < 2 || output.length < 2) return output[0] ?? 0;
  if (value <= input[0]) return output[0];
  if (value >= input[input.length - 1]) return output[output.length - 1];

  for (let i = 0; i < input.length - 1; i++) {
    if (value >= input[i] && value <= input[i + 1]) {
      const t = (value - input[i]) / (input[i + 1] - input[i]);
      return output[i] + t * (output[i + 1] - output[i]);
    }
  }
  return output[output.length - 1];
}

// ── useSpring ───────────────────────────────────────────────────────────────
// Just passes through the value — no spring physics (keeps it lightweight).
export function useSpring(
  source: MotionValue | number,
  _config?: { stiffness?: number; damping?: number }
): MotionValue {
  const initial = typeof source === "number" ? source : source.get();
  const result = useMotionValue(initial);

  useEffect(() => {
    if (typeof source !== "number") {
      return source.on("change", (v) => result.set(v));
    }
  }, [source, result]);

  return result;
}
