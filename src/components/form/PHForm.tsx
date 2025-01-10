/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues ?: Record<string , any>
}

type TIFormProps = {
  onSubmit : SubmitHandler<any>
  children : ReactNode
} & TFormConfig
const newDada = "Coming now"
console.log(newDada)
const PHForm = ({ onSubmit, children , defaultValues} : TIFormProps) => {
  const formConfig : TFormConfig = {}
  if(defaultValues) {
    formConfig['defaultValues'] = defaultValues
  }
  
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
