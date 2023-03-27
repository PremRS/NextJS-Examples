import { SessionProvider } from "next-auth/react";

import MainNavigation from "./MainNavigation";

function AuthLayout(props) {
  return (
    <SessionProvider session={props.session}>
      <MainNavigation isAuthLayout={true} />
      <main>{props.children}</main>
    </SessionProvider>
  );
}

export default AuthLayout;
