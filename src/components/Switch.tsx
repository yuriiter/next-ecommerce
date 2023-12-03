import { cn } from "@/utils";
import { ReactNode } from "react";

type SwitchProps = {
  label: ReactNode;
  value: boolean;
  onChange: (newValue: boolean) => void;
  className?: string;
};

export const Switch = ({ label, value, onChange, className }: SwitchProps) => {
  const toggle = () => onChange(!value);
  return (
    <label
      onClick={toggle}
      className={cn(["switch", value && "switch--checked", className])}
    >
      <div className="switch__checkbox"></div>
      <span className="switch__label">{label}</span>
    </label>
  );
};
