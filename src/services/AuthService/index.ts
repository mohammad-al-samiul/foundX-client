/* eslint-disable prettier/prettier */
"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

import nexiosInstance from "@/src/config/nexios.config";
import { IDecodedTokenProps } from "@/src/types";

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

    if (!data.success && !data.data) {
      throw new Error(data.message);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await nexiosInstance.post<AuthResponse>(
      "/auth/login",
      userData
    );

    if (!data.success && !data.data) {
      throw new Error(data.message);
    }

    if (data.success && data.data) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  //console.log(accessToken);
  let decodedToken = null;

  if (accessToken) {
    decodedToken = (await jwtDecode(accessToken)) as IDecodedTokenProps;

    //console.log("decode", decodedToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePhoto: decodedToken.profilePhoto,
    };
  }

  return decodedToken;
};
