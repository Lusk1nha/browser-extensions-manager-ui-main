"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
  createExtensionStore,
  ExtensionStoreState,
  type ExtensionStore,
} from "@/shared/stores/extensions.store";

export type ExtensionsStoreApi = ReturnType<typeof createExtensionStore>;

export const ExtensionsStoreContext = createContext<
  ExtensionsStoreApi | undefined
>(undefined);

export interface ExtensionsProviderProps {
  children: React.ReactNode;

  storageKey?: string;
  initialState?: ExtensionStore;
}

export const ExtensionsStoreProvider = ({
  children,
  storageKey,
  initialState,
}: Readonly<ExtensionsProviderProps>) => {
  const storeRef = useRef<ExtensionsStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createExtensionStore(storageKey, initialState);
  }

  return (
    <ExtensionsStoreContext.Provider value={storeRef.current}>
      {children}
    </ExtensionsStoreContext.Provider>
  );
};

export const useExtensionsStore = <T,>(
  selector: (store: ExtensionStoreState) => T
): T => {
  const store = useContext(ExtensionsStoreContext);

  if (!store) {
    throw new Error(
      "useExtensionsStore must be used within a ExtensionsProvider"
    );
  }

  return useStore(store, selector);
};
