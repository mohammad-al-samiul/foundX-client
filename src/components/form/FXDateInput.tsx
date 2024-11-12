import { DatePicker } from "@nextui-org/react";
import { Controller } from "react-hook-form";

import { IProps } from "./FXInput";

interface IDateProps extends IProps {}

export default function FXDateInput({ name, label }: IDateProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker className="" label={label} {...fields} />
      )}
    />
  );
}
