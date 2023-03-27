import { useRouter } from "next/router";
import Layout from "../../components/Layout/layout";
import List from "../../components/List/List";
import EventsSearch from "../../components/SearchBox/Search";
import { getAllUsers } from "../../helpers/Util";

export default function PagePreRender(props) {
  const router = useRouter();

  function findEventsHandler(category, userId) {
    router.push({
      pathname: "/ppr/user/[...users]",
      query: {
        users: [userId, category],
      },
    });
  }

  return (
    <Layout>
      <h1 className="center">All Users</h1>
      <EventsSearch onSearch={findEventsHandler} isUserSearch={true} />
      <div>
        <List items={props.users} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAllUsers();

  return {
    props: {
      users: data,
    },
    revalidate: 10,
  };
}
