import { asset } from "$fresh/runtime.ts";
import Image from "deco-sites/std/components/Image.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";



export interface Props {
  title?: string;
  imageUrl?: LiveImage;
}

export default function LandingHeader({ title, imageUrl }: Props) {
  return (
    <header className="fixed z-10 bg-gradient-to-b from-landing-bg-header to-transparent w-full h-[100px] pt-[20px]">
        <div className='w-full flex justify-between items-start mr-auto ml-auto pl-3 pr-3 xxl:max-w-[1320px]'>
          <a href="/">
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
              alt="logo-site"
            />
          )}
        </a>
          <nav className='mt-[10px]'>
            <ul className="flex text-white gap-16 mr-4 ml-4 justify-between items-center uppercase">
            <li>
              <a href="#why" title="why" className="text-[1rem] xxl:text-[1.2rem] no-underline" >
                Why
              </a>
            </li>
            <li>
              <a href="#what" title="what" className="text-[1rem] xxl:text-[1.2rem] no-underline" >
                What
              </a>
            </li>
            <li>
              <a href="#who" title="who"  className="text-[1rem] xxl:text-[1.2rem]  no-underline" >
                Who
              </a>
            </li>
          </ul>
          </nav>
        </div>
    </header>
  );
}
