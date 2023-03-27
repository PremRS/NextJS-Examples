import { useRouter } from "next/router";
import { Fragment } from "react";
import List from "../../../components/List/List";
import { getFilteredEvents } from "../../../helpers/dummy-data";

export default function FilteredEvents() {
  const router = useRouter();

  const filteredData = router.query.dates;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const year = +filteredData[0];
  const month = +filteredData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p>Invalid Request</p>;
  }

  const filteredEventData = getFilteredEvents({
    year: year,
    month: month,
  });

  if (!filteredEventData || filteredEventData.length === 0) {
    return <p>No Data</p>;
  }

  return (
    <Fragment>
      <h1>Welcome To The Particular Date Events Page.</h1>
      <h2>{filteredEventData[0].title}</h2>
      <div>{filteredEventData[0].description}</div>
      <List items={filteredEventData} />
    </Fragment>
  );
}
