import { Extension } from "@/entities/extension.entity";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ExtensionStore = {
  extensions: Extension[];
  isDefault: boolean;
};

export type ExtensionStoreActions = {
  setExtensions: (extensions: Extension[], isDefault?: boolean) => void;
  updateExtension: (id: string, payload: Omit<Extension, "id">) => void;
  removeExtension: (extensionId: string) => void;
};

export type ExtensionStoreState = ExtensionStore & ExtensionStoreActions;

export const defaultExtensionStore: ExtensionStore = {
  extensions: [],
  isDefault: true,
};

export const createExtensionStore = (
  storageKey: string = "web:extensions",
  initialState: ExtensionStore = defaultExtensionStore
) => {
  return create<ExtensionStoreState>()(
    persist(
      (set) => ({
        ...initialState,
        setExtensions(extensions, isDefault = false) {
          set({ extensions, isDefault });
        },
        updateExtension(id, payload) {
          set((state) => {
            const extensions = state.extensions.map((ext) =>
              ext.id === id ? { ...ext, ...payload } : ext
            );
            return { extensions, isDefault: false };
          });
        },
        removeExtension(extensionId) {
          set((state) => {
            const extensions = state.extensions.filter(
              (ext) => ext.id !== extensionId
            );
            return { extensions, isDefault: false };
          });
        },
      }),
      {
        name: storageKey,
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
