import React from "react";
import { Step } from "./Step";
import { BillingInfo } from "./StepsContent/BillingInfo";
import { useForm } from "@/hooks/forms/useForm";
import { RentCarForm } from "./types";
import { ValidationFunction } from "@/hooks/forms/types";
import { RentalInfo } from "./StepsContent/RentalInfo";
import { PaymentMethod } from "./StepsContent/PaymentMethod/PaymentMethod";
import { Confirmation } from "./StepsContent/Confirmation";

const stepMax = 3;

const validationFunction: ValidationFunction<RentCarForm> = (data) => {
  return {};
};

export const Steps = () => {
  const { register } = useForm<RentCarForm>({
    initialValues: {
      name: "",
      address: "",
      phoneNumber: "",
      townOrCity: "",
      pickUpLocation: "",
      pickUpDate: new Date(),
      pickUpTime: "",
      dropOffLocation: "",
      dropOffDate: new Date(),
      dropOffTime: "",
      paymentMethod: "CREDIT_CARD",
      marketingAgreement: false,
      termsAndConditionsAgreement: false,
    },
    validationFunction,
    onValid: (data) => console.log(data),
    onInvalid: (errors) => console.log(errors),
  });

  return (
    <div className="rent__steps">
      <Step
        stepIdx={0}
        stepMax={stepMax}
        title="Billing Info"
        subtitle={"Please enter your billing info"}
      >
        <BillingInfo register={register} />
      </Step>
      <Step
        stepIdx={1}
        stepMax={stepMax}
        title="Rental Info"
        subtitle={"Please select your rental dates"}
      >
        <RentalInfo register={register} />
      </Step>
      <Step
        stepIdx={2}
        stepMax={stepMax}
        title="Payment Method"
        subtitle={"Please enter your payment method"}
      >
        <PaymentMethod register={register} />
      </Step>
      <Step
        stepIdx={3}
        stepMax={stepMax}
        title="Confirmation"
        subtitle={
          "We are getting to the end. Just few clicks and your rental is ready!"
        }
      >
        <Confirmation register={register} />
      </Step>
    </div>
  );
};
