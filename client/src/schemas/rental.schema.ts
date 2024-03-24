import { dateOrDateStringToDate, setTimeOfDate } from "@/utils";
import { z } from "zod";
import { cardExpiryDate, phoneNumberRegex } from "@/constants/regex";
import { isCreditCard } from "validator";
import { stringAsTime } from "@/components/Select/TimeInput/utils";

export const PaymentMethodType = z.enum(["CREDIT_CARD", "PAY_PAL", "BITCOIN"]);

export const rentCarFormSchema = z
  .object({
    // Billing info
    name: z.string().min(1, "Required").max(100),
    address: z.string().min(1, "Required").max(100),
    phoneNumber: z.string().regex(phoneNumberRegex, "Not valid phone number"),
    townOrCity: z.string().min(1, "Required").max(100),

    // Rental info
    pickUpLocation: z.string().min(1, "Required").max(100),
    pickUpDate: z.string(),
    pickUpTime: z.string().min(1, "Required").max(100),
    dropOffLocation: z.string().min(1, "Required").max(100),
    dropOffDate: z.string(),
    dropOffTime: z.string().min(1, "Required").max(100),

    // Payment method
    paymentMethod: PaymentMethodType,
    cardNumber: z.string(),
    expirationDate: z.string(),
    cardHolder: z.string(),
    CVC: z.string(),

    // Agreements checkboxes
    marketingAgreement: z.boolean(),
    termsAndConditionsAgreement: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.termsAndConditionsAgreement) {
      ctx.addIssue({
        code: "custom",
        path: ["termsAndConditionsAgreement"],
        message: "You must agree to the terms and conditions.",
      });
    }

    if (data.paymentMethod === "CREDIT_CARD") {
      const { cardHolder, cardNumber, expirationDate, CVC } = data;
      if (cardHolder === "")
        ctx.addIssue({
          code: "custom",
          path: ["cardHolder"],
          message: "Required",
        });
      if (!isCreditCard(cardNumber))
        ctx.addIssue({
          code: "custom",
          path: ["cardNumber"],
          message: "Not valid card number",
        });

      if (!expirationDate.match(cardExpiryDate))
        ctx.addIssue({
          code: "custom",
          path: ["expirationDate"],
          message: "Not valid expiration date",
        });

      if (!CVC.match(/^\d{3}$/))
        ctx.addIssue({
          code: "custom",
          path: ["CVC"],
          message: "Not valid CVC",
        });
    }

    if (data.dropOffTime !== "" && data.pickUpTime !== "") {
      const pickUpDateAndTime = setTimeOfDate(
        dateOrDateStringToDate(data.pickUpDate) as Date,
        stringAsTime(data.pickUpTime as string)
      );

      const dropOffDateAndTime = setTimeOfDate(
        dateOrDateStringToDate(data.dropOffDate) as Date,
        stringAsTime(data.dropOffTime as string)
      );

      if (pickUpDateAndTime >= dropOffDateAndTime)
        ctx.addIssue({
          code: "custom",
          path: ["dropOffDate"],
          message: "Drop-off must be later than pick-up",
        });
    }
  });
