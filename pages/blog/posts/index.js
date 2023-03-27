import AllPosts from "../../../components/Posts/AllPosts";
import BlogLayout from "../../../components/Layout/BlogLayout";
import { getAllPosts } from "../../../helpers/PostUtil";
import Head from "next/head";

export default function BlogPostsPage(props) {
  return (
    <BlogLayout>
      <Head>
        <title>Blogs Posts</title>
      </Head>
      <AllPosts posts={props.allPosts} />
    </BlogLayout>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 10,
  };
}
