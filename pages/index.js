import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Welcome To The NextJS Tutorials.
      <ul>
        <li>
          <Link href="/fbr">File-based Routing example</Link>
        </li>
        <li>
          <Link href="/ppr">Page Pre-Rendering example</Link>
        </li>
        <li>
          <Link href="/dbc">API routing example</Link>
        </li>
        <li>
          <Link href="/blog">Blog Posts example</Link>
        </li>
        <li>
          <Link href="/user">NextAuth example</Link>
        </li>
      </ul>
    </h1>
  );
}
