import { Fragment } from "react";
import { getAllUsers, getUserById } from "../../../helpers/Util";

export default function UserDetailPage(props) {
  const userData = props.user;

  if (!userData) {
    return (
      <div>
        <p> Loading User Detail....</p>
      </div>
    );
  }

  return (
    <Fragment>
      <h1>Particular Users</h1>
      <div>
        <h2>User Detail</h2>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.phone}</p>
        <p>{userData.website}</p>
        <p>{userData.address.city}</p>
        <p>{userData.company.name}</p>
        <p>{userData.company.catchPhrase}</p>
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const id = context.params.userId;

  const data = await getUserById(id);

  return {
    props: {
      user: data,
    },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const users = await getAllUsers();

  const paths = users.map((user) => ({ params: { userId: "" + user.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
