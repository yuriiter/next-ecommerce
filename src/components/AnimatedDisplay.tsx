import { cn } from "@/utils";
import React, {
  useState,
  HTMLAttributes,
  ComponentPropsWithoutRef,
  useEffect,
} from "react";
import { Tags, WithAsProp } from "@/types/utils";

const DEFAULT_TAG = "div" as const;

type AnimatedDisplaySpecialProps = {
  disappearAnimationClassName?: string;
  appearAnimationClassName?: string;
  hiddenClassName?: string;
  onHide?: (...args: any[]) => any;
  display: boolean;
};

type AnimatedDisplayProps<T extends Tags> = WithAsProp<T> &
  AnimatedDisplaySpecialProps &
  (ComponentPropsWithoutRef<T> & HTMLAttributes<HTMLOrSVGElement>);

export const AnimatedDisplay = <T extends Tags = typeof DEFAULT_TAG>({
  as = DEFAULT_TAG,
  display,
  disappearAnimationClassName = "animate-disappear",
  appearAnimationClassName = "animate-appear",
  hiddenClassName = "hidden",
  onHide,
  className,
  ...props
}: AnimatedDisplayProps<T>) => {
  const [disappearAnimationFinishedFlag, setDisappearAnimationFinishedFlag] =
    useState(!display);

  useEffect(() => {
    if (display) setDisappearAnimationFinishedFlag(false);
  }, [display]);

  const hideSelf = () => {
    if (!display) {
      onHide?.();
      setDisappearAnimationFinishedFlag(true);
    }
  };

  const Component: Tags = as;

  return (
    <Component
      {...props}
      className={cn([
        display && appearAnimationClassName,
        !display && disappearAnimationClassName,
        disappearAnimationFinishedFlag && hiddenClassName,
        className,
      ])}
      onAnimationEnd={hideSelf}
      onTransitionEnd={hideSelf}
    />
  );
};
