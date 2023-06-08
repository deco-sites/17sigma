import { useState,useEffect} from "preact/hooks";
import { createContext } from "preact";
import React, { PropsWithChildren } from "https://esm.sh/v118/preact@10.13.2/compat/src/index.js";
import LandingLoading from "../islands/LandingLoading.tsx";

const LoadingContext = createContext({});

export default function LoadingProvider(props:PropsWithChildren) {

  const [appLoading, setAppLoading] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setAppLoading(true);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') 
    {
      onPageLoad();
    } else {
      self.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => self.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ appLoading, setAppLoading }}>
      <LandingLoading loading={appLoading} />
      {props.children}
    </LoadingContext.Provider>
  );
}