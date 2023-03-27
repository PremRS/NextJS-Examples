import Head from "next/head";
import Hero from "../../components/Hero/Hero";
import BlogLayout from "../../components/Layout/BlogLayout";
import FeaturedPosts from "../../components/Posts/FeaturedPosts";
import { getFeaturedPosts } from "../../helpers/PostUtil";

export default function BlogHomePage(props) {
  const { posts } = props;
  return (
    <BlogLayout>
      <Head>
        <title>PR Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </BlogLayout>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10,
  };
}
