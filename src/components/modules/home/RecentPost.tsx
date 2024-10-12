import { getRecentPosts } from "@/src/services/RecentPost";

export default async function RecentPost() {
  const { data: posts } = await getRecentPosts();

  return (
    <div>
      {posts &&
        posts.map((item: any) => (
          <>
            <p key={item._id}>this is {item.title}</p>
          </>
        ))}
    </div>
  );
}
