"use client";

import { ExtensionsStoreProvider } from "@/providers/extensions-provider";
import { ThemeProvider } from "../providers/theme-provider";
import { Toaster } from "sonner";
import { APP_EXTENSIONS } from "@/shared/app.constants";

interface SystemProvidersProps {
  children: React.ReactNode;
}

export function SystemProviders(props: Readonly<SystemProvidersProps>) {
  const { children } = props;

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="web:theme"
    >
      <Toaster />

      <ExtensionsStoreProvider
        initialState={{ extensions: APP_EXTENSIONS, isDefault: true }}
        storageKey="web:extensions"
      >
        {children}
      </ExtensionsStoreProvider>
    </ThemeProvider>
  );
}
