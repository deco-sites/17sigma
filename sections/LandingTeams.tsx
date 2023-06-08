import { useEffect, useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Container from "../components/Container.tsx";
import TeamsComponent from "../components/Teams.tsx";

export type TeamsProps = {
  name?: string;

  office?: string;
  imageUrl?: LiveImage;
  linkedinIn?: string;
  twitter?: string;
  destaque?: boolean;
};

export interface Props {
  teams: TeamsProps[];
}

export default function LandingTeams(teams: Props) {
  const [tableList] = useState<Array<TeamsProps>>(
    Array.isArray(teams.teams) ? teams.teams : [],
  );

  return (
    <div id="who" className="bg-landing-section pt-20 pb-16">
      <Container>
        <div className="mb-10">
          <h3 className="text-[1.3125rem] text-landing-primary mb-2 animate-on-scroll">
            WHO
          </h3>
          <p className="text-[2.01rem] text-white font-medium mb-4 animate-on-scroll animate-delay-200">
            At 17Sigma, we work side by side with entrepreneurs.
          </p>
        </div>

        <div className="grid gap-10 px-28 animate-on-scroll animate-on-scroll animate-delay-300">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-[1.875rem]"
            data-aos="fade-in"
          >
            {tableList.filter((item) => item.destaque).map((item) => (
              <TeamsComponent
                name={item.name}
                office={item.office}
                imageUrl={item.imageUrl}
                linkedinIn={item.linkedinIn}
                twitter={item.twitter}
                destaque={item.destaque}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[2.875rem]">
            {tableList.filter((item) => !item.destaque).map((item) => (
              <TeamsComponent
                name={item.name}
                office={item.office}
                imageUrl={item.imageUrl}
                linkedinIn={item.linkedinIn}
                twitter={item.twitter}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
