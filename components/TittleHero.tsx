import { useState } from "preact/hooks";
import type { ComponentChildren } from "preact";

export interface TextProps {
  highLight?: boolean;
  text: string;
}

export interface Props {
  texts: TextProps[];
}

export default function TitleHero(props: Props) {
  const [textList] = useState<Array<TextProps>>(
    Array.isArray(props.texts) ? props.texts : [
      { highLight: false, text: "We bet on talent to achieve" },
      { highLight: true, text: " 17Sigma" },
      { highLight: false, text: " results." },
    ],
  );

  return (
    <h1 className="
      text-[3rem] 
      xxl:text-[3.2rem] z-10 w-[565px] 
      max-w-full
    text-landing-primary font-semibold leading-[0.98em] drop-shadow-[2px_2px_1px_rgb(0,0,0)] 
      md:drop-shadow-drop-shadow-none 
      brightness-110 md:brightness-100">
      {textList.map(({ highLight, text }) => {
        if (highLight) {
          return <span class="text-white">{text}</span>;
        }
        return text;
      })}
    </h1>
  );
}
