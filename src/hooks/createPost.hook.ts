import { useMutation } from "@tanstack/react-query";
import createPost from "../services/Post";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData: FormData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post created successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
