import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { wrapper } from "@/modules/store";
import Layout from "@/components/Layout";
import ThemeWrapper from "@/components/ThemeWrapper";

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeWrapper>
    </Provider>
  );
}
