import { useState } from "react";
import { useRouter } from "next/router";
import { RegisterFunction } from "@/hooks/forms/types";
import { PartialRentCarForm, RentCarForm } from "../types";
import { StepInput } from "../StepInput";
import { Button } from "@/components/Button";
import { Safety } from "@/components/svg/icons";
import { Switch } from "@/components/Switch";
import { Dialog, DialogHeader, DialogActions } from "@/components/Dialog";
import { LoadingButton } from "@/components/Button/LoadingButton";
import { promisedTimeout } from "@/utils";

type ConfirmationProps = {
  register: RegisterFunction<RentCarForm>;
};

const confirmationInputs: PartialRentCarForm = {
  marketingAgreement: {
    label:
      "I agree with sending marketing and newsletter emails. No spam, promised!",
    placeholder: "",
    type: "switch",
  },
  termsAndConditionsAgreement: {
    label: "I agree with our terms and conditions and privacy policy.",
    placeholder: "",
    type: "switch",
  },
} as const;

export const Confirmation = ({ register }: ConfirmationProps) => {
  const router = useRouter();
  const [isRentButtonLoading, setIsRentButtonLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeDialog = () => {
    router.push("/");
    setDialogOpen(false);
  };

  const onRentButtonClick = () => {
    setIsRentButtonLoading(true);
    promisedTimeout(2000).then(() => {
      setDialogOpen(true);
      setIsRentButtonLoading(false);
    });
  };

  return (
    <>
      <div className="step__content confirmation">
        {Object.entries(confirmationInputs).map(
          ([name, { label, placeholder }]) => {
            const { value, ...rest } = register(
              name as keyof RentCarForm,
              true
            );

            return (
              <div className="confirmation__switch-wrapper" key={name}>
                <StepInput
                  placeholder={placeholder}
                  showLabel={false}
                  label={label}
                  {...rest}
                  value={value?.toString()}
                  renderInput={({ value, onChange }) => (
                    <Switch
                      value={value === "true" ? true : false}
                      label={label}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            );
          }
        )}
      </div>
      <LoadingButton
        onClick={onRentButtonClick}
        loading={isRentButtonLoading}
        size="lg"
        className="confirmation__submit"
      >
        Rent now
      </LoadingButton>
      <div className="confirmation__safety-caption">
        <Safety className="safety-caption__icon" />
        <p className="safety-caption__title">All your data is safe</p>
        <p className="safety-caption__subtitle">
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
      <Dialog open={dialogOpen} close={closeDialog}>
        <DialogHeader>Successfully rented a car</DialogHeader>
        Details have been sent to your email. Enjoy your ride!
        <DialogActions>
          <Button variant="secondary" onClick={closeDialog}>
            Go home
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
