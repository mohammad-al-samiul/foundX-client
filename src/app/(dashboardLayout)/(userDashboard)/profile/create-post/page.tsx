"use client";

import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Divider } from "@nextui-org/react";

import FXInput from "@/src/components/form/FXInput";

export default function CreatePost() {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //console.log(data);
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };
    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput label="Title" name="title" />
          <div className="my-3">
            <Divider />

            <div className="flex justify-between items-center">
              <h3>Owner Verification</h3>
              <Button onClick={() => handleFieldAppend()}>Append</Button>
            </div>

            {fields.map((item, index) => (
              <div key={item.id} className="flex justify-between">
                <FXInput label="Question" name={`questions.${index}.value`} />
                <Button onClick={() => remove(index)}>Remove</Button>
              </div>
            ))}

            <Divider />
          </div>
          <Button type="submit"> Post</Button>
        </form>
      </FormProvider>
    </div>
  );
}
