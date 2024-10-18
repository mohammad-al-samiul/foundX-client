"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import registerValidationSchema from "@/src/schemas/register.schema";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/UI/Loading";

export default function Register() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      ...data,
      profilePhoto: "http://surl.li/dsoezh",
    };

    handleUserRegistration(userInfo);
  };

  return (
    <>
      {isPending && <Loading />}

      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center mt-5">
        <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
        <p className="mb-4">Help Lost Items Find Their Way Home</p>
        <div className="w-[35%]">
          <FXForm
            defaultValues={{
              name: "Mir Hussain",
              email: "mir@gmail.com",
              mobileNumber: "01711223344",
              password: "123456",
            }}
            resolver={zodResolver(registerValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Name" name="name" size="sm" type="text" />
            </div>
            <div className="py-3">
              <FXInput label="Email" name="email" size="sm" type="email" />
            </div>
            <div className="py-3">
              <FXInput
                label="Mobile Number"
                name="mobileNumber"
                size="sm"
                type="number"
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
    </>
  );
}
