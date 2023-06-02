import { useState } from "preact/hooks";

import { PartnerProps } from "../components/Partner.tsx";
import dataParterns from "../data/paterns.json" assert { type: "json" };
import Partner from "../components/Partner.tsx";

export interface Props {
  partners: PartnerProps[];
}

export default function LandingPatners(props: Props) {
  const [partners] = useState<Array<PartnerProps>>(
    Array.isArray(props.partners) ? props.partners : dataParterns,
  );
  return (
    <div>
      {partners.map((partner) => <Partner {...partner} />)}
    </div>
  );
}
