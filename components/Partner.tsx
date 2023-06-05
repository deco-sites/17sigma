import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { asset } from "$fresh/runtime.ts";
import { JSX } from "preact";

export interface PartnerProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  siteUrl: string;
  name: string;
  country: string;
  brandImageSource: LiveImage;
  category:
    | "Agtech"
    | "Ecommerce / Marketplace"
    | "Fintech"
    | "Foodtech"
    | "Healthtech"
    | "Insurtech"
    | "SaaS"
    | "Web3";
}

export default function Partner(
  { brandImageSource, category, country, name, siteUrl, ...props }:
    PartnerProps,
) {
  return (
    <a
      href={siteUrl}
      title={name}
      target={"_blank"}
      className="partner flex h-[85px] md:h-[175px] items-center justify-center"
      {...props}
    >
      <article className="flex w-100 items-center justify-center flex-col">
        <img
          src={brandImageSource
            ? brandImageSource
            : asset(`/partners/${brandImageSource}`)}
          alt={name}
          className="max-h-[50px]"
        />
        <h6 className="text-landing-primary text-sm md:text-base mt-4">
          {category}, {country}
        </h6>
      </article>
    </a>
  );
}
