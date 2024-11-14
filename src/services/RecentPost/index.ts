const fetchOption = {
  next: {
    tags: ["posts"],
  },
};
export const getRecentPosts = async () => {
  const res = await fetch(
    `http://localhost:5000/api/v1/items?limit=6`,
    fetchOption
  );

  // delay(10000);

  return res.json();
};
