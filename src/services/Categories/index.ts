"use server";
import axiosInstance from "@/src/config/axios.config";

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/item-categories");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
