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
import { allDistict } from "@bangladeshi/bangladesh-address";

import FXInput from "@/src/components/form/FXInput";
import FXDateInput from "@/src/components/form/FXDateInput";
import dateToIso from "@/src/utils/dateToIso";
import FXSelect from "@/src/components/form/FXSelect";
import { useGetCategories } from "@/src/hooks/category.hook";

const cityOptions = allDistict()
  .sort()
  .map((district: string) => ({
    key: district,
    label: district,
  }));

export default function CreatePost() {
  const {
    data: categoriesData,
    isSuccess: categorySuccess,
    isLoading: categoryLoading,
  } = useGetCategories();

  let categoryOptions: { key: string; label: string }[] = [];
  //console.log("data", categoriesData);

  if (categoriesData?.data && !categoryLoading) {
    categoryOptions = categoriesData?.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      }));
  }

  console.log("options", categoryOptions);
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
      dateFound: dateToIso(data.dateFound),
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
        <Divider className="my-2" />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex gap-2 mb-2">
              <FXInput label="Title" name="title" />

              <FXDateInput label="Found Date" name="dateFound" />
            </div>
            <div className="lg:flex gap-2 mb-2">
              <FXInput label="Location" name="location" />
              <FXSelect label="City" name="city" options={cityOptions} />
            </div>
            <div className="lg:flex gap-2 mb-2">
              <FXSelect
                label="Category"
                name="category"
                options={categoryOptions}
                disabled={!categorySuccess}
              />
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
