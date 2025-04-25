"use client";

import { AppElementFilter } from "@/shared/app.constants";
import { Button } from "@browser-extensions/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface ExtensionItemProps extends Omit<AppElementFilter, "label"> {
  children: React.ReactNode;
}

export function ExtensionItem(props: Readonly<ExtensionItemProps>) {
  const { name, children, description } = props;
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("filter") ?? "all";

  const isActive = currentFilter === name;

  return (
    <Link
      href={{
        search: `?filter=${name}`,
      }}
    >
      <Button type="button" variant={isActive ? "active" : "default"}>
        {children}
      </Button>
    </Link>
  );
}
