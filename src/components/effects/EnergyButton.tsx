import { type ReactNode } from "react";

interface EnergyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const EnergyButton = ({ children, className = "", onClick }: EnergyButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default EnergyButton;
