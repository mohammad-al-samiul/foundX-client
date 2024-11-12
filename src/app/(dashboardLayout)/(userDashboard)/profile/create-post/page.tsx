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
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100  px-12 py-12">
      <div>
        <h2 className="text-xl font-bold my-2">Post a found item</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2 mb-2">
              <FXInput label="Title" name="title" />
              <FXInput label="Found on" name="found" />
            </div>
            <div className="flex gap-2 mb-2">
              <FXInput label="Location" name="location" />
              <FXInput label="City" name="city" />
            </div>
            <div className="flex gap-2 mb-2">
              <FXInput label="Category" name="category" />
              <FXInput label="Upload Image" name="image" />
            </div>
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
            <div className="flex justify-end">
              <Button type="submit"> Post</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
