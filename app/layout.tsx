import { Metadata } from "next";
import React from "react";
import BackgroundGrid from "../components/BackgroundGrid/BackgroundGrid";
import { BackgroundGridProvider } from "../components/BackgroundGrid/BackgroundGridProvider";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import { colors } from "../consts/colors";
import StyledComponentsRegistry from "../lib/registry";
import { Global } from "./(client)/Global";
import { homepageData } from "./(client)/homepageData";

export const metadata: Metadata = {
  metadataBase: new URL("https://plancraft.eu"),
  title: {
    default: "Plancraft",
    template: "Plancraft\u2002|\u2002%s",
  },
  description: homepageData.heroPerex,
  // themeColor: colors.white,
  // colorScheme: "light",
  manifest: "/manifest.json",
  openGraph: {
    images: homepageData.about.figureBanner.image.src,
    title: homepageData.heroHeader,
    description: homepageData.heroPerex,
  },
  other: {
    "msapplication-TileColor": colors.white,
  },
  icons: {
    icon: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='cs'>
      <StyledComponentsRegistry>
        <Global />
        <body>
          <Navbar />
          {children}
          <BackgroundGrid />
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
};

export default layout;
