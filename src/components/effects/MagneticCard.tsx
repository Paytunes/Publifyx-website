import { type ReactNode, type CSSProperties } from "react";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  style?: CSSProperties;
}

const MagneticCard = ({
  children,
  className = "",
  style,
}: MagneticCardProps) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default MagneticCard;
