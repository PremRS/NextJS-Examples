import { useRouter } from "next/router";
import Comments from "../../components/Input/comments";

export default function CommentSection() {
  const router = useRouter();

  const commentId = router.query.commentId;

  return <Comments commentId={commentId} />;
}
