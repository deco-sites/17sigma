import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted({ enableInspectVSCode }: Props) {
  return (
   <h1>Home</h1>
  );
}
