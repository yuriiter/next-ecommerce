import { Placement } from "@/types/common";

export type DateInputProps = {
  placeholder?: string;
  min?: Date;
  max?: Date;
  value: Date | undefined;
  onChange: (newValue: Date) => void;
  className?: string;
  disabled?: boolean;
  placement?: Placement;
  forceUseNativeSelect?: boolean;
};
