import React, { ReactNode } from "react";

type StepProps = {
  stepIdx: number;
  stepMax: number;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const Step = ({
  stepIdx,
  stepMax,
  title,
  subtitle,
  children,
}: StepProps) => {
  return (
    <div className="step">
      <div className="step__header">
        <div className="step__description">
          <h3 className="step__title">{title}</h3>
          <p className="step__subtitle">{subtitle}</p>
        </div>
        <span className="step__index">
          Step {stepIdx + 1} of {stepMax + 1}
        </span>
      </div>
      <div className="step__body">{children}</div>
    </div>
  );
};
