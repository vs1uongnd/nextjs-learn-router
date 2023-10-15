import { useRouter } from "next/router";
import React from "react";

const BlogPostsPage = () => {
  const router = useRouter();
  //   http://localhost:3000/blog/2023/22
  console.log(router.query);
  //   {slug: Array(2)}
  // slug
  // :
  // (2) ['2023', '22']
  return <div>BlogPostsPage</div>;
};

export default BlogPostsPage;
