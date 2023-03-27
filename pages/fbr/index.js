import { useRouter } from "next/router";
import Layout from "../../components/Layout/layout";
import List from "../../components/List/List";
import EventsSearch from "../../components/SearchBox/Search";
import { getFeaturedEvents } from "../../helpers/dummy-data";

export default function Home() {
  const events = getFeaturedEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push({
      pathname: "/fbr/events/[...dates]",
      query: {
        dates: [year, month],
      },
    });
  }

  return (
    <Layout>
      <h1 className="center">Featured events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <div>
        <List items={events} />
      </div>
    </Layout>
  );
}
