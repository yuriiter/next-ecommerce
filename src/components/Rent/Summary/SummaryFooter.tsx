import React from "react";
import { SummaryCaptions } from "./SummaryCaptions";
import { cn } from "@/utils";

type SummaryFooterProps = {
  total: number;
  className?: string;
};

export const SummaryFooter = ({ total, className }: SummaryFooterProps) => {
  return (
    <div className={cn(["summary__footer", className])}>
      <div className="summary__footer-description">
        <SummaryCaptions
          title="Total rental price"
          subtitle="
              Overall price and includes rental discount
            "
        />
      </div>
      {typeof total === "number" && (
        <p className="summary__footer-price">${total.toFixed(2)}</p>
      )}
    </div>
  );
};
