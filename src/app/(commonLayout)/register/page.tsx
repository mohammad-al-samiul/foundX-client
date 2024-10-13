"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Register() {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center mt-5">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm onSubmit={onSubmit}>
          <div className="py-3">
            <FXInput type="text" label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput type="email" label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput
              type="number"
              label="Mobile Number"
              name="mobileNumber"
              size="sm"
            />
          </div>
          <div className="py-3">
            <FXInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
