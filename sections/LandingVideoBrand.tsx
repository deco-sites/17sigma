import { asset } from "$fresh/runtime.ts";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export interface LandingPatnersProps {
  videoSource?: LiveVideo;
}

export default function LandingPatners({
  videoSource,
}: LandingPatnersProps) {
  return (
    <video
      controls
      playsInline
      preload="auto"
      className="h-full w-full object-cover"
    >
      <source
        src={videoSource ? videoSource : asset(`/brand.webm`)}
        type="video/webm"
      />
    </video>
  );
}
