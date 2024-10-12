import Card from "@/src/components/UI/Card";
import { getRecentPosts } from "@/src/services/RecentPost";
import { IPost } from "@/src/types";

export default async function RecentPost() {
  const { data: posts } = await getRecentPosts();

  return (
    <div className="flex gap-5 justify-center items-center">
      {posts?.map((item: IPost) => <Card key={item._id} item={item} />)}
    </div>
  );
}
