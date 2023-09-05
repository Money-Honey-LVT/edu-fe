import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "../../global.css";
import { Notifications as NotificationsProvider } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-[url('/images/bg.png')]">
      <MantineProvider>
        <NotificationsProvider />
        <Component {...pageProps} />
      </MantineProvider>
    </main>
  );
}
