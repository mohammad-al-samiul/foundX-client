"use server";

import axiosInstance from "@/src/config/axios.config";
import envConfig from "@/src/config/envConfig";
import { revalidateTag } from "next/cache";
import { getCurrentUser } from "../AuthService";

export const createPost = async (postData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/items", postData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getPost = async (postId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/items/${postId}`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getMyPosts = async () => {
  const user = await getCurrentUser();

  const res = await axiosInstance.get(`/items?user=${user?._id}`);

  return res.data;
};
