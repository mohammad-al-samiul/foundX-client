import React, { ChangeEvent, useState } from "react";
import { IProps } from "./FXInput";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IFileProps extends IProps {}

export default function FXInputFile({ label, name }: IFileProps) {
  const [imageFile, setImageFile] = useState<File[] | []>([]);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files![0];
    setImageFile((prev) => [...prev, files]);
  };
  console.log("image", imageFile);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full">
      <Input
        multiple
        {...register(name)}
        type="file"
        id={name}
        onChange={handleFile}
        className="hidden"
      />
      <label
        className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
