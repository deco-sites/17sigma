import { useCallback, useEffect, useState } from "preact/hooks";
import { LogoAnimate } from "../components/IconSvg.tsx";

interface LandingLoadingProps {
  loading: boolean;
}

export default function LandingLoading({ loading }: LandingLoadingProps) {
  const [start, setStart] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setClose(true);
        clearInterval(timeout);
      }, 1000);
    }
  }, [loading]);



  useEffect(() => {

      const startInterval = () => setInterval(() => {
        setStart(!start);
      }, 600);

      const interval = startInterval();

      if(!loading)
      {
        return (() => {
          clearInterval(interval);
        });
      }

      return (() => {
        clearInterval(interval);
      });
      
  }, [loading,start]);

  return (
    <div
      id="loading"
      className={(close ? "closing" : "") +
        " pointer-events-none fixed h-screen w-screen z-50 flex items-center justify-center"}
    >
      <div className="loading-door z-0 w-[50%] h-full absolute top-0 left-0 bg-landing-background">
      </div>
      <div className="loading-door z-0 w-[50%] h-full absolute top-0 right-0 bg-landing-background">
      </div>
      <LogoAnimate start={start} />
    </div>
  );
}
