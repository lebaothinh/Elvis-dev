import "./globals.css";
import type { Metadata } from "next";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { HeaderMBButtonMenu } from "./component/HeaderMBButtonMenu";
import { HeaderMenu } from "./component/HeaderMenu";
import { NativeLink } from "./component/NativeLink";

export const metadata: Metadata = {
  title: "Evis dev",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/caros?styles=51460,51457,51446"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/logo.svg"
        />
      </head>
      <body className="bg-meat-brown">
        <header className="container mx-auto bg-cultured snap-start z-50 w-screen">
          <nav className="flex flex-wrap justify-between items-center mx-[20px] lg:mx-[50px] xl:mx-[77px] h-[60px] lg:h-[123px] border-b border-[#EFEDEB]">
            <NativeLink href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Elvis Dev
              </span>
            </NativeLink>
            <HeaderMBButtonMenu />
            <input className="hidden peer" type="checkbox" id="side-menu" />
            <div className="peer-checked:flex fixed z-50 lg:static inset-0 w-screen top-[60px] h-[calc(100vh_-_60px)] lg:top-[123px] bg-cultured lg:h-[unset] hidden justify-between items-center lg:flex lg:w-auto">
              <HeaderMenu />
            </div>
            <a
              href="tel:+84 347 013 955"
              className="hidden lg:flex items-center gap-[10px]"
            >
              <span className="text-yankees-blue">+84 347 013 955</span>

              <button className="relative flex justify-center items-center h-[55px] w-[55px] bg-white rounded-full">
                <PhoneIcon className="h-4 w-4 text-deep-space-sparkle " />
              </button>
            </a>
          </nav>
        </header>
        <main className="container mx-auto bg-cultured min-h-[calc(100vh_-_60px)] lg:min-h-[calc(100vh_-_123px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
