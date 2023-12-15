import { NewValueHandler, RegisterFunction } from "@/hooks/forms/types";
import React from "react";
import { PartialRentCarForm, RentCarForm } from "../types";
import { PointMark } from "@/components/PointMark";
import { StepInput } from "../StepInput";
import { Select } from "@/components/Select/Select";
import DateInput from "@/components/Select/DateInput";
import TimeInput from "@/components/Select/TimeInput";
import { StepInputNewValueHandler } from "../StepInput";
import {
  dateToString,
  stringToDate,
} from "@/components/Select/DateInput/utils";
import { locationOptions } from "@/constants/mockupData";
import { SelectOption } from "@/components/Select/types";

type RentalInfoProps = {
  register: RegisterFunction<RentCarForm>;
};

const pickUpInputs: PartialRentCarForm = {
  pickUpLocation: {
    label: "Location",
    placeholder: "Select your city",
    type: "select",
  },
  pickUpDate: {
    label: "Date",
    placeholder: "Select your date",
    type: "date",
  },
  pickUpTime: {
    label: "Time",
    placeholder: "Select your time",
    type: "time",
  },
} as const;

const dropOffInputs: PartialRentCarForm = {
  dropOffLocation: {
    label: "Location",
    placeholder: "Select your city",
    type: "select",
  },
  dropOffDate: {
    label: "Date",
    placeholder: "Select your date",
    type: "date",
  },
  dropOffTime: {
    label: "Time",
    placeholder: "Select your time",
    type: "time",
  },
} as const;

export const RentalInfo = ({ register }: RentalInfoProps) => {
  return (
    <div className="step__content rental-info">
      <div className="rental-info__part">
        <div className="rental-info__part-header">
          <PointMark variant="dark" />
          Pick - Up
        </div>
        <div className="rental-info__part-inputs">
          {Object.entries(pickUpInputs).map(
            ([name, { label, placeholder, type }]) => {
              const { value, ...rest } = register(
                name as keyof RentCarForm,
                true,
              );

              return (
                <StepInput
                  key={name}
                  label={label}
                  placeholder={placeholder}
                  {...rest}
                  value={value?.toString() || ""}
                  renderInput={({ placeholder, value, onChange }) => {
                    if (type === "select") {
                      return (
                        <Select
                          className="step-input__input"
                          placeholder={placeholder}
                          value={value}
                          options={locationOptions}
                          onChange={onChange as StepInputNewValueHandler}
                        />
                      );
                    }
                    if (type === "date") {
                      const onDateChange = (newValue: Date) =>
                        onChange(dateToString(newValue));
                      return (
                        <DateInput
                          className="step-input__input"
                          placeholder={placeholder}
                          value={stringToDate(value)}
                          onChange={onDateChange}
                        />
                      );
                    }
                    if (type === "time") {
                      return (
                        <TimeInput
                          className="step-input__input"
                          placeholder={placeholder}
                          value={value}
                          onChange={onChange}
                        />
                      );
                    }
                    return undefined;
                  }}
                />
              );
            },
          )}
        </div>
      </div>
      <div className="rental-info__part">
        <div className="rental-info__part-header">
          <PointMark variant="light" />
          Drop - Off
        </div>
        <div className="rental-info__part-inputs">
          {Object.entries(dropOffInputs).map(
            ([name, { label, placeholder, type }]) => {
              const { value, ...rest } = register(
                name as keyof RentCarForm,
                true,
              );

              return (
                <StepInput
                  key={name}
                  label={label}
                  placeholder={placeholder}
                  {...rest}
                  value={value?.toString() || ""}
                  renderInput={({ placeholder, value, onChange }) => {
                    if (type === "select") {
                      return (
                        <Select
                          className="step-input__input"
                          placeholder={placeholder}
                          value={value}
                          options={locationOptions}
                          onChange={
                            onChange as StepInputNewValueHandler<SelectOption>
                          }
                          placement="right-bottom"
                        />
                      );
                    }
                    if (type === "date") {
                      const onDateChange = (newValue: Date) =>
                        onChange(dateToString(newValue));
                      return (
                        <DateInput
                          className="step-input__input"
                          placeholder={placeholder}
                          value={stringToDate(value)}
                          onChange={onDateChange}
                          placement="right-bottom"
                        />
                      );
                    }
                    if (type === "time") {
                      return (
                        <TimeInput
                          className="step-input__input"
                          placeholder={placeholder}
                          value={value}
                          onChange={onChange}
                          placement="right-bottom"
                        />
                      );
                    }
                    return undefined;
                  }}
                />
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};
