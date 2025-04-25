import { Geologica, Noto_Sans } from "next/font/google";

const noteSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-geologica",
});

export default function RootTemplate(
  props: Readonly<{ children: React.ReactNode }>
) {
  const { children } = props;

  return (
    <div
      id="root-template"
      className={`${geologica.className} ${noteSans.className} font-sans antialiased`}
    >
      <div className="backgroundGradient">{children}</div>
    </div>
  );
}
