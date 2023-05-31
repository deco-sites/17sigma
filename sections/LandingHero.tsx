import { asset } from "$fresh/runtime.ts";
import type { Video as LiveVideo, Image as LiveImage} from "deco-sites/std/components/types.ts";
import Container from "../components/Container.tsx";

export interface Props {
  titleHero: string;
  /** @description choose which title words will be highlighted*/
  filterTextHighLight: string;
  /** @description maximum size limite 20mb*/
  videoUrl: LiveVideo;
  backgroundImageUrl?:LiveImage;
}

export default function LandingHero(
  {
    titleHero = "We bet on talent to achieve 17Sigma results.",
    filterTextHighLight = "17Sigma",
    videoUrl,
    backgroundImageUrl
  }: Props,
) {

  let indexTextHighLight = 0;
  const splitHero = titleHero.split(" ").filter((text, index) => {
    if (text === filterTextHighLight) 
    {
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
        <video
          playsInline
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        >
          <source
            src={videoUrl ? videoUrl : asset("/hero-video.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <div style={`background-image:url(${backgroundImageUrl})`} className='hidden md:block absolute bg-bottom z-2 top-0 left-0 w-full h-full pointer-events-none bg-cover bg-no-repeat'></div>
      <div
        id="hero"
        className={`bg-hero-overlay md:bg-transparent flex items-center justify-start h-screen w-100 relative bg-bottom bg-cover bg-no-repeat `}
      >
        <Container>
          {titleHero && filterTextHighLight &&
            (
              <h1 className="text-[3rem] xxl:text-[3.2rem] z-10 w-[565px] max-w-full text-landing-primary font-semibold leading-[0.98em]">
                {textHeroInit}{" "}
                <span class="text-white">{` ${filterTextHighLight} `}</span>
                {" "}
                {textHeroRest}
              </h1>
            )}
        </Container>
      </div>
    </div>
  );
}
