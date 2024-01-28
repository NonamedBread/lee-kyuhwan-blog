import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { wrapper } from "@/modules/store";
import Layout from "@/components/home/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
