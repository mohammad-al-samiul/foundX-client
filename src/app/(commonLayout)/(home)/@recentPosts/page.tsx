import Card from "@/src/components/UI/Card";
import Container from "@/src/components/UI/Container";
import { getRecentPosts } from "@/src/services/RecentPost";
import { IPost } from "@/src/types";

export default async function RecentPost() {
  const { data: posts } = await getRecentPosts();
  //console.log(posts);

  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 items-center justify-center">
        {posts?.map((item: IPost) => <Card key={item._id} item={item} />)}
      </div>
    </Container>
  );
}
