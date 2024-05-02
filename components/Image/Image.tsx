"use client";

import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

const Image = (args: ExportedImageProps) => {
  return <ExportedImage {...args} />;
};

export default Image;
