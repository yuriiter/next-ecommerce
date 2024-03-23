import { cn } from "@/utils";
import { ReactNode } from "react";

type SwitchProps = {
  label: ReactNode;
  value: boolean;
  onChange: (newValue: boolean) => void;
  className?: string;
  changeHandlerForCheckboxOnly?: boolean;
};

export const Switch = ({
  label,
  value,
  onChange,
  className,
  changeHandlerForCheckboxOnly,
}: SwitchProps) => {
  const labelToggle = () => {
    if (changeHandlerForCheckboxOnly) return;
    onChange(!value);
  };

  const checkboxToggle = () => {
    if (!changeHandlerForCheckboxOnly) return;
    onChange(!value);
  };

  return (
    <label
      onClick={labelToggle}
      className={cn([
        "switch",
        value && "switch--checked",
        changeHandlerForCheckboxOnly && "switch--unclickable-label",
        className,
      ])}
    >
      <div className="switch__checkbox" onClick={checkboxToggle}></div>
      <span className="switch__label">{label}</span>
    </label>
  );
};
