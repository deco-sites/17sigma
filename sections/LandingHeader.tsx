import { useEffect, useRef } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Header from "../components/Header.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title?: string;
  imageLogoSource?: LiveImage;
}

export default function LandingHeader({ title, imageLogoSource }: Props) {
  return <Header title={title} imageLogoSource={imageLogoSource} />;
}
