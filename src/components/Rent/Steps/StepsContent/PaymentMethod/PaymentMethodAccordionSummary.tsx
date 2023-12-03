import { ReactNode } from "react";

type PaymentMethodAccordionSummaryProps = {
  img: ReactNode;
  title: ReactNode;
};

export const PaymentMethodAccordionSummary = ({
  img,
  title,
}: PaymentMethodAccordionSummaryProps) => (
  <div className="payment-method__summary">
    <span className="payment-method__summary-title">{title}</span>
    <span className="payment-method__summary-logo">{img}</span>
  </div>
);
