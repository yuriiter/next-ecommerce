import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  FormValues,
  UseFormParams,
  FormErrors,
  HandleChangeFunction,
  RegisterFunction,
  OnChangeFunction,
} from "./types";
import { compareStringRecords } from "./utils";

export const useForm = <FormSchema extends FormValues>({
  initialValues,
  validationFunction,
  onValid,
  onInvalid,
  customOnChange,
}: UseFormParams<FormSchema>) => {
  const initialValuesRef = useRef<FormSchema>(initialValues);
  const [values, setValues] = useState<Partial<FormSchema>>(
    initialValues || {},
  );
  const [errors, setErrors] = useState<FormErrors<FormSchema>>({});

  const handleChange: HandleChangeFunction<FormSchema> = useCallback(
    <T extends keyof FormSchema>(name: T, value: FormSchema[T]) => {
      setValues((currentValues) => ({
        ...currentValues,
        [name]: value,
        ...customOnChange?.(name, value),
      }));
    },
    [customOnChange],
  );

  const isDirty = useMemo(
    (): boolean => !compareStringRecords(initialValuesRef.current, values),
    [values],
  );

  const register: RegisterFunction<FormSchema> = useCallback(
    <ShouldUseNewValueHandler extends boolean = false>(
      name: keyof FormSchema,
      shouldUseNewValueHandler: ShouldUseNewValueHandler = false as ShouldUseNewValueHandler,
    ) => {
      const onChange: OnChangeFunction<FormSchema, ShouldUseNewValueHandler> = (
        shouldUseNewValueHandler
          ? <T extends keyof FormSchema>(newValue: FormSchema[T]) => {
              handleChange(name, newValue);
            }
          : (e: ChangeEvent<HTMLInputElement>) =>
              handleChange(name, e.target.value as FormSchema[keyof FormSchema])
      ) as OnChangeFunction<FormSchema, ShouldUseNewValueHandler>;

      return {
        name,
        value: values[name] || initialValuesRef.current[name],
        onChange,
      };
    },
    [handleChange, values, initialValuesRef],
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const newErrors: FormErrors<FormSchema> = {};
      let isValid = true;

      const validationResults = validationFunction(values);

      for (const fieldName in validationResults) {
        const error = validationResults[fieldName];
        if (error) {
          newErrors[fieldName] = error;
          isValid = false;
        }
      }

      setErrors(newErrors);

      if (isValid) {
        onValid(values);
      } else {
        onInvalid(newErrors);
      }
    },
    [validationFunction, values, onValid, onInvalid],
  );

  const reset = useCallback((newInitialValues?: FormSchema) => {
    if (newInitialValues) initialValuesRef.current = newInitialValues;
    setValues(initialValuesRef.current);
    setErrors({});
  }, []);

  return {
    formState: {
      values,
      errors,
      isDirty,
    },
    handleChange,
    register,
    handleSubmit,
    reset,
  };
};
