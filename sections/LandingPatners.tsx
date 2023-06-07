import { PartnerProps } from "../components/Partner.tsx";
import FilterPartners from "../islands/FilterPartners.tsx";

import Container from "../components/Container.tsx";

export interface Props {
  partners: PartnerProps[];
}

export default function LandingPatners(props: Props) {
  {
    return (
      <div id="what" className="bg-landing-background pt-20 pb-16">
        <Container>
          <h3 class="animate-on-scroll text-[1.3125rem] text-landing-primary mb-2 uppercase">
            What
          </h3>
          <p class="animate-on-scroll animate-delay-200 text-[2.01rem] text-white font-medium mb-4">
            We partner with early stage LatAm startups.
          </p>
          <p className="animate-on-scroll animate-delay-300 text-[1.3rem] text-white mb-4">
            Pre-Seed | Seed
          </p>
        </Container>
        <FilterPartners partners={props.partners} />
      </div>
    );
  }
}
