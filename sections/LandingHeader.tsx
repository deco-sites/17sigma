import type { Image } from "deco-sites/std/components/types.ts";
import Header from "../islands/Header.tsx";

export interface Props {
  title?: string;
  imageLogoSource?: Image;
}

export default function LandingHeader({ title, imageLogoSource }: Props) {
  return <Header title={title} imageLogoSource={imageLogoSource} />;
}
