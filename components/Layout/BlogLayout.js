import { SessionProvider } from "next-auth/react";

import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <SessionProvider session={props.session}>
      <MainNavigation />
      <main>{props.children}</main>
    </SessionProvider>
  );
}

export default Layout;
