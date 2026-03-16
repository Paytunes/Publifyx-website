import { type ReactNode, type MouseEvent, useRef } from "react";
import MagneticButton from "./MagneticButton";

interface EnergyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const EnergyButton = ({ children, className = "", onClick }: EnergyButtonProps) => {
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rippleRef.current) {
      rippleRef.current.style.left = `${x}px`;
      rippleRef.current.style.top = `${y}px`;
      rippleRef.current.classList.remove("animate-ripple");
      void rippleRef.current.offsetWidth; // force reflow
      rippleRef.current.classList.add("animate-ripple");
    }
    onClick?.();
  };

  return (
    <MagneticButton as="div" className={`relative overflow-hidden energy-btn ${className}`} strength={0.25}>
      <div onClick={handleClick} className="relative z-10 w-full h-full cursor-pointer flex items-center justify-center">
        {children}
        <span
          ref={rippleRef}
          className="absolute w-0 h-0 rounded-full bg-white/30 pointer-events-none"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
    </MagneticButton>
  );
};

export default EnergyButton;
