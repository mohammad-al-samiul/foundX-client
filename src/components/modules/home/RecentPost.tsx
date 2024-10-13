/* eslint-disable import/order */
import { getRecentPosts } from "@/src/services/RecentPost";
import { IPost } from "@/src/types";
import Card from "../../UI/Card";

export default async function RecentPost() {
  const { data: posts } = await getRecentPosts();

  return (
    <div className="grid grid-cols-3 gap-5 justify-center items-center">
      {posts?.map((item: IPost) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
}
