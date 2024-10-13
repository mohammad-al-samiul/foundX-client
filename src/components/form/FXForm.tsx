import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormProps extends IFormConfigProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
}

interface IFormConfigProps {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

export default function FXForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IFormProps) {
  const formConfig: IFormConfigProps = {};

  if (!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
