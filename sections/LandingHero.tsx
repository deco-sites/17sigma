import { asset } from "$fresh/runtime.ts";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export interface Props {
  titleHero: string;
  /** @description choose which title words will be highlighted*/
  filterTextHighLight: string;
  videoUrl: LiveVideo;
}

export default function LandingHero(
  {
    titleHero = "We bet on talent to achieve 17Sigma results.",
    filterTextHighLight = "17Sigma",
    videoUrl,
  }: Props,
) {
  let indexTextHighLight = 0;

  const splitHero = titleHero.split(" ").filter((text, index) => {
    if (text === filterTextHighLight) {
      indexTextHighLight = index;
    }

    return text;
  });

  const textHeroInit = splitHero.slice(0, indexTextHighLight).join(" ")
    .toString();
  const textHeroRest = splitHero.slice(indexTextHighLight + 1, splitHero.length)
    .join(" ").toString();

  return (
    <div>
      <div className="absolute -z-10 top-0 h-full w-full object-cover">
        <video autoPlay loop className="h-full w-full object-cover">
          <source
            src={videoUrl ? videoUrl : asset(`/hero-video.mp4`)}
            type="video/mp4"
          />
        </video>
      </div>
      <div
        id="hero"
        className="flex items-center justify-start h-screen w-100 relative bg-bottom bg-cover bg-no-repeat no-repeat"
        style={`background-image: url(${asset(`/herobg.webp`)})`}
      >
        <div className="w-[min(100vw,1320px)] mr-auto ml-auto pl-4 pr-4">
          {titleHero && filterTextHighLight &&
            (
              <h1 className="text-[3.2rem] z-10 w-[565px] max-w-full text-landing-primary font-semibold leading-[0.98em]">
                {textHeroInit}{" "}
                <span class="text-white">{` ${filterTextHighLight} `}</span>
                {" "}
                {textHeroRest}
              </h1>
            )}
        </div>
      </div>
    </div>
  );
}
