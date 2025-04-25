import "./globals.css";

import "@browser-extensions/design-system/styles.css";
import "@browser-extensions/ui/styles.css";

import type { Metadata } from "next";
import { SystemProviders } from "@/components/system-providers";

export const metadata: Metadata = {
  title: "Browser Extensions Manager",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SystemProviders>{children}</SystemProviders>
      </body>
    </html>
  );
}
