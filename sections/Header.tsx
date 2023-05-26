import { asset } from "$fresh/runtime.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title?: string;
  imageUrl: LiveImage;
}

export default function Header({ title, imageUrl }: Props) {
  return (
    <header className="fixed z-10 bg-gradient-to-b from-bg-header to-transparent w-screen pl-4 pr-4 h-[100px] pt-4">
      <div className="w-[min(100vw,1320px)] mr-auto ml-auto flex justify-between items-center">
        {title ? title : (
          <Image
            className={"max-w-full max-h-[60px"}
            src={imageUrl ? imageUrl : asset(`/logo.webp`)}
            sizes="(max-width: 100%)"
            width={120}
            height={60}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            preload
            title={title}
          />
        )}

        <nav>
          <ul className="flex text-white gap-5 justify-between items-center uppercase">
            <li>
              <a href="#why" className="text-[1.2rem] no-underline">Why</a>
            </li>
            <li>
              <a href="#what" className="text-[1.2rem] no-underline">What</a>
            </li>
            <li>
              <a href="#who" className="text-[1.2rem] no-underline">Who</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
