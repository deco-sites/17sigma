

import { PartnerProps } from "../components/Partner.tsx";
import FilterPartners from "../islands/FilterPartners.tsx";

export interface Props {
  partners: PartnerProps[];
}

export default function LandingPatners(props: Props) {

  {
    return (
      <div className='bg-landing-background'>
        <FilterPartners partners={props.partners} />
      </div>
    );
  }
  
}
