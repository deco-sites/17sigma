import { asset } from "$fresh/runtime.ts";
import type {
  Image as LiveImage,
  Video as LiveVideo,
} from "deco-sites/std/components/types.ts";
import Container from "../components/Container.tsx";
import { TextProps } from "../components/TittleHero.tsx";
import TitleHero from "../components/TittleHero.tsx";

export interface Props {
  title: TextProps[];
  /** @description maximum size limite 25mb*/
  videoUrl: LiveVideo;
  backgroundImageUrl?: LiveImage;
}

export default function LandingHero(
  { title, videoUrl, backgroundImageUrl }: Props,
) {
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
      <div
        style={`background-image:url(${backgroundImageUrl ? backgroundImageUrl : asset("/herobg.webp")})`}
        className="hidden md:block absolute bg-right-bottom z-2 top-0 left-0 w-full h-full pointer-events-none bg-cover bg-no-repeat"
      >
      </div>
      <div
        id="hero"
        className={`bg-hero-overlay md:bg-transparent flex items-center justify-start h-screen w-100 relative bg-bottom bg-cover bg-no-repeat `}
      >
        <Container>
          <TitleHero texts={title} />
        </Container>
      </div>
    </div>
  );
}
