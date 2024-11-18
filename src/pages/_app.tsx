import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';

import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Price Management</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
