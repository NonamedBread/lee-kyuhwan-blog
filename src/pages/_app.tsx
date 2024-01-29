import { useEffect } from "react";
import { useSelector } from "react-redux";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { wrapper } from "@/modules/store";
import Layout from "@/components/home/Layout";

interface Props {
  children: React.ReactNode;
}

function ThemeWrapper({ children }: Props) {
  const theme = useSelector((state: any) => state.darkMode.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return children;
}

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
