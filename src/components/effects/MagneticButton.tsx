import { useRef, useState, type ReactNode, type CSSProperties } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: "button" | "div";
  style?: CSSProperties;
}

const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  onClick,
  as: Tag = "button",
  style,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState("translate(0px, 0px)");

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    setTransform(`translate(${dx}px, ${dy}px)`);
  };

  const handleLeave = () => setTransform("translate(0px, 0px)");

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{ transform, transition: "transform 0.25s cubic-bezier(0.33, 1, 0.68, 1)", ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export default MagneticButton;
