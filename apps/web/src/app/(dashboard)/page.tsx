import { ExtensionList } from "@/components/extension-list/extension-list";
import { Header } from "./_components/header";

export default function Home() {
  return (
    <main className="max-w-[1170px] min-h-screen w-full flex flex-col gap-y-500 sm:gap-y-800 px-200 sm:px-400 py-300 md:py-500">
      <header className="w-full">
        <Header />
      </header>

      <main className="w-full h-full">
        <ExtensionList />
      </main>
    </main>
  );
}
