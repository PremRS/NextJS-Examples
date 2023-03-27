import AuthLayout from "../../components/Layout/AuthLayout";
import UserProfile from "../../components/Profile/UserProfile";
import { getSession } from "next-auth/react";

function ProfilePage() {
  return (
    <AuthLayout>
      <UserProfile />
    </AuthLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/user/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
