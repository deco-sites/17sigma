import { asset } from "$fresh/runtime.ts";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export interface LandingPatnersProps {
  videoUrl: LiveVideo;
}

export default function LandingPatners({
  videoUrl
}:LandingPatnersProps) {
  return (
    <video controls playsInline  className="h-full w-full object-cover">
      <source
        src={videoUrl ? videoUrl : asset(`/brand.mp4`)}
        type="video/mp4"
      />
    </video>
  )
}
