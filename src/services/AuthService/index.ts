"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import nexiosInstance from "@/src/config/nexios.config";

interface AuthResponse {
  success: boolean;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
  message?: string;
}

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await nexiosInstance.post<AuthResponse>(
      "/auth/register",
      userData
    );

    if (data.success && data.data) {
      cookies().set("accessToken", data.data.accessToken);
      cookies().set("refreshToken", data.data.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
