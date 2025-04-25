import { Text } from "@browser-extensions/ui/text";
import Link from "next/link";

export function CreatedBy() {
  return (
    <Text>
      Developed by{" "}
      <Link
        className="text-primary underline"
        target="_blank"
        href="https://www.linkedin.com/in/olucaspedro/"
      >
        Lucas Pedro da Hora
      </Link>
    </Text>
  );
}
