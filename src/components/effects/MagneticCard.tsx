import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  style?: CSSProperties;
}

const MagneticCard = ({
  children,
  className = "",
  strength = 0.15,
  style,
}: MagneticCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [transform, setTransform] = useState("translate(0px, 0px) scale(1)");
  const [shadow, setShadow] = useState("");

  const handleMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = Math.max(-8, Math.min(8, (e.clientX - cx) * strength));
    const dy = Math.max(-8, Math.min(8, (e.clientY - cy) * strength));
    setTransform(`translate(${dx}px, ${dy}px) scale(1.02)`);
    setShadow("0 12px 32px -8px rgba(0,0,0,0.12)");
  };

  const handleLeave = () => {
    setTransform("translate(0px, 0px) scale(1)");
    setShadow("");
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        boxShadow: shadow,
        transition: "transform 0.25s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.25s ease-out",
        willChange: "transform",
        ...style,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

export default MagneticCard;
