import BlogLayout from "../../../components/Layout/BlogLayout";
import { getPostData } from "../../../helpers/PostUtil";
import PostContent from "../../../components/Posts/PostDetail/PostContent";
import Head from "next/head";

export default function BlogPostPage(props) {
  const { postDetail } = props;

  return (
    <BlogLayout>
      <Head>
        <title>{postDetail.title}</title>
        <meta name="description" content={postDetail.excerpt} />
      </Head>
      <h1>Particular Blogs Post</h1>
      {postDetail && <PostContent post={postDetail} />}
    </BlogLayout>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  return {
    props: {
      postDetail: getPostData(slug),
    },
    revalidate: 60,
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
