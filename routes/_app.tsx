import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GTM.tsx";
import GlobalTags from "../components/GlobalTags.tsx";
import DesignSystem from "../sections/DesignSystem.tsx";
import Animate from "../islands/Animate.tsx";

const trackingId = "";

export default function App(props: AppProps) {
  return (
    <>
      <Animate/>
      <DesignSystem />
      <GlobalTags />
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}
      <props.Component />
    </>
  );
}
