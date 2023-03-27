import List from "../../../components/List/List";
import { getAllEvents } from "../../../helpers/dummy-data";

export default function Home() {
  const events = getAllEvents();

  return (
    <>
      <h1 className="center">All Events</h1>
      <div>
        <List items={events} />
      </div>
    </>
  );
}
