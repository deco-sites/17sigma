import { useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Container from '../components/Container.tsx'
import TeamsComponent from "../components/Teams.tsx";

export type TeamsProps = {
  name?: string;
  office?: string;
  imageUrl?: LiveImage;
  linkedinIn?: string;
  twitter?: string;
  destaque?: boolean;
}

export interface Props {
 teans: TeamsProps[]
}

export default function LandingTeams(props: Props) {
  const [tableList] = useState<Array<TeamsProps>>(
    Array.isArray(props.teans) ? props.teans : [],
  );
console.log(tableList)
  return (
    <div className="bg-landing-section pt-20 pb-16">
      <Container>
        <div className="mb-10">
          <h3 className="text-[1.3125rem] text-landing-primary mb-2">WHO</h3>
          <p className="text-[2.01rem] text-white font-medium mb-4">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
        </div>
        <div className="grid gap-10 px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]">
            <TeamsComponent
              name="Bianca Sassoon"
              office="Managing Partner"
              imageUrl="/bian-color.jpg"
              linkedinIn="https://www.linkedin.com/in/biancasassoon/"
              twitter="https://twitter.com/biancasassoon"
            />
            <TeamsComponent
              name="Pierpaolo Barbieri"
              office="Founder"
              imageUrl="/pier-color.jpg"
              linkedinIn="https://www.linkedin.com/in/pierpaolobarbieri/"
              twitter="https://twitter.com/pbarbieri"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[2.875rem]">
            <TeamsComponent
              name="Luke Mohadeb"
              office="Principal"
              imageUrl="/lucas-mohadeb.jpeg"
              linkedinIn="https://www.linkedin.com/in/lucasmohadeb/"
              destaque
            />
            <TeamsComponent
              name="Francisco Cappelletti"
              office="Associate"
              imageUrl="/fran-color.jpg"
              linkedinIn="https://www.linkedin.com/in/franciscocappelletti/"
              twitter="https://twitter.com/francappelletti"
              destaque
            />
            <TeamsComponent
              name="Lucas Santos"
              office="Managing Partner"
              imageUrl="/lucas-color.jpg"
              linkedinIn="https://www.linkedin.com/in/lsantos-/"
              destaque
            />
            <TeamsComponent
              name="Lucila Alami"
              office="Office Admin"
              imageUrl="/lucila-color.jpg"
              linkedinIn="https://www.linkedin.com/in/lucila-alami/"
              destaque
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
