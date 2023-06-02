import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { asset } from "$fresh/runtime.ts";

export interface PartnerProps {
  siteUrl: string;
  name: string;
  country: string;
  brandImageSource: LiveImage;
  category: string;
}

export default function Partner(
  { brandImageSource, category, country, name, siteUrl }: PartnerProps,
) {
  return (
    <a
      href={siteUrl}
      title={name}
      target={"_blank"}
      className="flex h-[175px] items-center justify-center"
    >
      <article className="flex items-center justify-center flex-col">
        <img
          src={brandImageSource
            ? brandImageSource
            : asset(`/partners/${brandImageSource}`)}
          alt={name}
          className="max-w-[85%] max-h-[50px]"
        />
        <h6 className="text-landing-primary text-sm md:text-base mt-4">
          {category},{country}
        </h6>
      </article>
    </a>
  );
}
