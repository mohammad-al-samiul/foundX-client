import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import axiosInstance from "@/src/config/axios.config";
import { IPost } from "@/src/types";

export default async function FoundItem() {
  const { data } = await axiosInstance.get(`/items`);
  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => (
          <Post key={post?._id} post={post} />
        ))}
      </div>
    </Container>
  );
}