import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { asset } from "$fresh/runtime.ts";
import Container from "../components/Container.tsx";

import { useCallback } from "preact/hooks";

export interface Props {
  logo?: string;
  first_icon?: string;
  first_url?: string;
  second_icon?: string;
  second_url?: string;
  footer_text?: string;
}

export default function LandingFooter({
  logo,
  first_icon,
  first_url,
  second_icon,
  second_url,
  footer_text,
}: Props) {
  return (
    <footer class="h-[5rem] bg-landing-section flex justify-center items-center">
      <Container>
        <div class="h-[5rem] container-x1">
          <div class="h-[5rem] w-[100%] row flex items-center justify-center">
            <div class="w-1/3">
              <a href="#">
                <img src={logo ? logo : asset("/iso.png")} alt="17 Sigma" />
              </a>
            </div>

            <div class="w-1/3 text-center items-center">
              <a class="text-white text-[0.6rem]">
                {footer_text
                  ? footer_text
                  : "All Rights Reserved © 2022 — 17Sigma"}
              </a>
            </div>

            <div class="w-1/3 flex justify-end">
              <ul class="flex items-center justify-center">
                <a href={first_url ? first_url : "#"} class="mr-4">
                  {first_icon
                    ? first_icon
                    : <FaTwitter size={24} className="text-landing-primary" />}
                </a>
                <a href={second_url ? second_url : "#"}>
                  {second_icon ? second_icon : (
                    <FaLinkedinIn
                      size={24}
                      className="text-landing-primary"
                    />
                  )}
                </a>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
