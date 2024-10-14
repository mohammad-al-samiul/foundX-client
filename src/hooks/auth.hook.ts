import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

import { registerUser } from "../services/AuthService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: (userData) => registerUser(userData),
    onSuccess: () => {
      toast.success("User Registration Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
