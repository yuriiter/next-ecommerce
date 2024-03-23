import React, { useState } from "react";
import { Step } from "./Step";
import { BillingInfo } from "./StepsContent/BillingInfo";
import { useForm } from "@/hooks/forms/useForm";
import { RentCarForm } from "./types";
import { RentalInfo } from "./StepsContent/RentalInfo";
import { PaymentMethod } from "./StepsContent/PaymentMethod/PaymentMethod";
import { Confirmation } from "./StepsContent/Confirmation";
import { promisedTimeout, zodResolver } from "@/utils";
import { rentCarFormSchema } from "@/schemas/rental.schema";
import { useToast } from "@/components/Toast/useToast";

const stepMax = 3;

export const Steps = () => {
  const { addToast } = useToast();
  const onRentButtonClick = () => {
    setIsRentButtonLoading(true);
    promisedTimeout(2000).then(() => {
      setDialogOpen(true);
      setIsRentButtonLoading(false);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RentCarForm>({
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
      cardNumber: "",
      expirationDate: "",
      cardHolder: "",
      CVC: "",
      marketingAgreement: false,
      termsAndConditionsAgreement: false,
    },
    validationFunction: zodResolver(rentCarFormSchema),
    onInvalid: (errors) => {
      if (
        Object.keys(errors).length === 1 &&
        errors["termsAndConditionsAgreement"] !== undefined
      ) {
        addToast({
          type: "error",
          content: "You must agree to the terms and conditions.",
        });
      } else addToast({ type: "error", content: "Check form and try again" });
    },
    onValid: onRentButtonClick,
  });

  const [isRentButtonLoading, setIsRentButtonLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <form className="rent__steps">
      <Step
        stepIdx={0}
        stepMax={stepMax}
        title="Billing Info"
        subtitle={"Please enter your billing info"}
      >
        <BillingInfo errors={errors} register={register} />
      </Step>
      <Step
        stepIdx={1}
        stepMax={stepMax}
        title="Rental Info"
        subtitle={"Please select your rental dates"}
      >
        <RentalInfo errors={errors} register={register} />
      </Step>
      <Step
        stepIdx={2}
        stepMax={stepMax}
        title="Payment Method"
        subtitle={"Please enter your payment method"}
      >
        <PaymentMethod errors={errors} register={register} />
      </Step>
      <Step
        stepIdx={3}
        stepMax={stepMax}
        title="Confirmation"
        subtitle={
          "We are getting to the end. Just few clicks and your rental is ready!"
        }
      >
        <Confirmation
          handleSubmit={handleSubmit}
          register={register}
          isRentButtonLoading={isRentButtonLoading}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      </Step>
    </form>
  );
};
