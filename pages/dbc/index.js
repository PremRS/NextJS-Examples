import Link from "next/link";
import NewsletterRegistration from "../../components/Input/newsletter-registration";
import { Fragment } from "react";

export default function DBConnectivityPage() {
  return (
    <Fragment>
      <NewsletterRegistration />
      <div className="center">
        <Link href="/dbc/1">Show My Comments</Link>
      </div>
    </Fragment>
  );
}
