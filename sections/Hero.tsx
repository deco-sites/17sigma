import { asset } from "$fresh/runtime.ts";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export interface Props {
  titleHero: string;
  filterTextHighLight: string;
  videoUrl: LiveVideo;
}

export default function Hero(
  { titleHero, filterTextHighLight, videoUrl }: Props,
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
      <div
        id="hero"
        className="flex items-center justify-start h-screen w-screen relative bg-bottom bg-cover bg-no-repeat no-repeat"
        style={`background-image: url(${asset(`/herobg.webp`)})`}
      >
        <div className="w-[min(100vw,1320px)] mr-auto ml-auto ">
          {titleHero && filterTextHighLight &&
            (
              <h1 className="text-[3.2rem] z-10 w-full md:w-6/12">
                {textHeroInit}{" "}
                <span class="text-gray-50 ">{` ${filterTextHighLight} `}</span>
                {" "}
                {textHeroRest}
              </h1>
            )}
        </div>
      </div>
      <div className="fixed z-0 h-full w-full object-cover">
        <video autoPlay loop className="h-full w-full object-cover">
          <source
            src={videoUrl ? videoUrl : asset(`/hero-video.mp4`)}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
