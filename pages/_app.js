import { globalStyles } from "@/src/commons/styles/globalStyles";
import Layout from "@/src/components/commons/layout";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
