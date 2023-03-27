import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import Logo from "./Logo";
import classes from "./MainNavigation.module.css";

function MainNavigation({ isAuthLayout }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function logOutHandler() {
    signOut();
  }

  return isAuthLayout ? (
    <header className={classes.header}>
      <Link href="/user">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/user/auth">Login</Link>{" "}
            </li>
          )}
          {session && (
            <>
              <li>
                <Link href="/user/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logOutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  ) : (
    <header className={classes.header}>
      <Link href="/blog">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/blog/posts">Posts</Link>
          </li>
          <li>
            <Link href="/blog/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
