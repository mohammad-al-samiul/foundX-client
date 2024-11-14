"use client";

import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Divider, Image } from "@nextui-org/react";
import { allDistict } from "@bangladeshi/bangladesh-address";

import FXInput from "@/src/components/form/FXInput";
import FXDateInput from "@/src/components/form/FXDateInput";
import dateToIso from "@/src/utils/dateToIso";
import FXSelect from "@/src/components/form/FXSelect";
import { useGetCategories } from "@/src/hooks/category.hook";
import FXInputFile from "@/src/components/form/FXInputFile";
import { useState } from "react";
import { AddIcon, TrashIcon } from "@/src/assets/icon";
import FXTextarea from "@/src/components/form/FXTextArea";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/createPost.hook";
import Loading from "@/src/components/UI/Loading";
import { useRouter } from "next/navigation";

const cityOptions = allDistict()
  .sort()
  .map((district: string) => ({
    key: district,
    label: district,
  }));

export default function CreatePost() {
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const {
    data: categoriesData,
    isSuccess: categorySuccess,
    isLoading: categoryLoading,
  } = useGetCategories();

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess: createPostSuccess,
  } = useCreatePost();

  const { user } = useUser();

  const router = useRouter();

  const formData = new FormData();

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

  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { image: images, ...restData } = data;
    //console.log(data);
    const postData = {
      ...restData,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToIso(data.dateFound),
      user: user?._id,
    };

    formData.append("data", JSON.stringify(postData));

    for (let image of images) {
      formData.append("itemImages", image);
    }

    // console.log(formData.get("itemImages"));
    // console.log(formData.get("data"));

    handleCreatePost(formData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  if (!createPostPending && createPostSuccess) {
    router.push("/");
  }

  return (
    <>
      {createPostPending && <Loading />}
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
                <FXInputFile
                  label="Upload Image"
                  name="image"
                  setImagePreviews={setImagePreviews}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {imagePreviews.length > 0 &&
                  imagePreviews.map((image) => (
                    <div key={image}>
                      <Image
                        src={image}
                        width={70}
                        height={70}
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
              <div className="flex flex-wrap-reverse gap-2 py-2">
                <div className="min-w-fit flex-1">
                  <FXTextarea label="Description" name="description" />
                </div>
              </div>
              <div className="my-3">
                <Divider />

                <div className="flex justify-between items-center mb-5 mt-3">
                  <h1 className="text-xl">Owner verification questions</h1>
                  <Button isIconOnly onClick={() => handleFieldAppend()}>
                    <AddIcon />
                  </Button>
                </div>

                <div className="space-y-5">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2 items-center">
                      <FXInput
                        label="Question"
                        name={`questions.${index}.value`}
                      />
                      <Button
                        isIconOnly
                        className="h-14 w-16"
                        onClick={() => remove(index)}
                      >
                        <TrashIcon />
                      </Button>
                    </div>
                  ))}
                </div>

                <Divider />
              </div>
              <div className="flex justify-end">
                <Button type="submit"> Post</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
