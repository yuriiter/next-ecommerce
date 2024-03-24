import React from "react";
import { StepInput } from "../../StepInput";
import { PartialRentCarForm, RentCarForm } from "../../types";
import { FormErrors, RegisterFunction } from "@/hooks/forms/types";
import { PaymentMethodType } from "../../types";
import {
  Accordion,
  AccordionDetail,
  AccordionSummary,
} from "@/components/Accordion";
import { PaymentMethodAccordionSummary } from "./PaymentMethodAccordionSummary";
import { Bitcoin, Paypal, VisaMastercard } from "@/components/svg/icons";

type PaymentMethodProps = {
  register: RegisterFunction<RentCarForm>;
  errors: FormErrors<RentCarForm>;
};

const billingInfoInputs: PartialRentCarForm = {
  cardNumber: {
    label: "Card number",
    placeholder: "Card number",
  },
  expirationDate: {
    label: "Expiration date",
    placeholder: "DD/MM/YY",
  },
  cardHolder: {
    label: "Card holder",
    placeholder: "Card holder",
  },
  townOrCity: {
    label: "CVC",
    placeholder: "CVC",
  },
} as const;

export const PaymentMethod = ({ register, errors }: PaymentMethodProps) => {
  const { value: paymentMethod, onChange: expandAccordion } = register(
    "paymentMethod",
    true
  );

  const handleAccordionChange = (value: PaymentMethodType) => () =>
    paymentMethod === value ? null : expandAccordion(value);

  return (
    <div className="step__content payment-method">
      <Accordion
        expanded={paymentMethod === "CREDIT_CARD"}
        handleChange={handleAccordionChange("CREDIT_CARD")}
      >
        <AccordionSummary>
          <PaymentMethodAccordionSummary
            img={<VisaMastercard />}
            title="Credit Card"
          />
        </AccordionSummary>
        <AccordionDetail>
          <div className="billing-info">
            {Object.entries(billingInfoInputs).map(
              ([name, { label, placeholder }]) => {
                const { value, ...rest } = register(name as keyof RentCarForm);

                return (
                  <StepInput
                    key={name}
                    label={label}
                    placeholder={placeholder}
                    {...rest}
                    value={value as string}
                    error={errors[name as keyof RentCarForm]}
                  />
                );
              }
            )}
          </div>
        </AccordionDetail>
      </Accordion>
      <Accordion
        expanded={paymentMethod === "PAY_PAL"}
        handleChange={handleAccordionChange("PAY_PAL")}
      >
        <AccordionSummary>
          <PaymentMethodAccordionSummary img={<Paypal />} title="PayPal" />
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={paymentMethod === "BITCOIN"}
        handleChange={handleAccordionChange("BITCOIN")}
      >
        <AccordionSummary>
          <PaymentMethodAccordionSummary img={<Bitcoin />} title="Bitcoin" />
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
