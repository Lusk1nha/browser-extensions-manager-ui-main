import Link from "next/link";
import { AppRoutes } from "@/shared/enums/app.enum";
import { Card } from "@browser-extensions/ui/card";
import { Logo } from "@browser-extensions/ui/logo";
import { ThemeAction } from "@/components/actions/theme-action";
import { ResetApplicationAction } from "@/components/actions/reset-application-action";

export function Header() {
  return (
    <Card className="flex items-center justify-between gap-x-100">
      <Link href={AppRoutes.Home}>
        <Logo />
      </Link>

      <div className="flex items-center gap-x-100">
        <ResetApplicationAction />
        <ThemeAction />
      </div>
    </Card>
  );
}
