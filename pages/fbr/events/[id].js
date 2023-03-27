import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../../helpers/dummy-data";

export default function EventDetail() {
  const router = useRouter();
  const id = router.query.id;
  const event = getEventById(id);

  return (
    <Fragment>
      <h1 className="center">Welcome to Event Detail Page</h1>
      {event ? (
        <h2>Welcome {id} Event.</h2>
      ) : (
        <p>No Events found for given {id}</p>
      )}
    </Fragment>
  );
}
