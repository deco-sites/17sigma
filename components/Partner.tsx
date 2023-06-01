import type {
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface PartnerProps {
  siteUrl: string;
  name: string;
  country:string;
  brandImageSource:LiveImage;
  category:string;
}

export default function Partner({brandImageSource,category,country,name,siteUrl }:PartnerProps) {

  return (
    <article>
      <a href={siteUrl} title={name} target={'_blank'}>
        <img src={brandImageSource} alt={name} />
        <h6>{category},{country}</h6>
      </a>
    </article>
  )
}
