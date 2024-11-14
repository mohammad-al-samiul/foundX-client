"use server";

import axiosInstance from "@/src/config/axios.config";
import { revalidateTag } from "next/cache";

const createPost = async (postData: FormData) => {
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

export default createPost;
