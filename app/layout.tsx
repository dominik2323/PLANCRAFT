import React from "react";
import { Global } from "./(client)/Global";
import StyledComponentsRegistry from "../lib/registry";
import { Metadata } from "next";
import { colors } from "../consts/colors";

export const metadata: Metadata = {
  metadataBase: new URL("https://plancraft.cz"),
  title: {
    default: "Plancraft",
    template: "Plancraft\u2002|\u2002%s",
  },
  description: "",
  themeColor: colors.white,
  colorScheme: "light",
  manifest: "/manifest.json",
  openGraph: {
    images: "",
    title: "",
    description: "",
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
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
};

export default layout;
