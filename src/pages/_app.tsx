import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "../../global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-[url('/images/bg.png')]">
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </main>
  );
}
