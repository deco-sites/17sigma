import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { asset } from "$fresh/runtime.ts";
import Container from "../components/Container.tsx";

export default function LandingFooter() {
  return (
    <footer class="h-[5rem] bg-landing-section flex justify-center items-center">
      <Container>
        <div class="h-[5rem] container-x1">
          <div class="h-[5rem] w-[100%] row flex items-center justify-center">
            <div class="w-1/3">
              <a href="#">
                <img src={asset("/iso.png")} alt="17 Sigma" />
              </a>
            </div>

            <div class="w-1/3 text-center items-center">
              <a class="text-white text-[0.6rem]">
                All Rights Reserved © 2022 — 17Sigma
              </a>
            </div>

            <div class="w-1/3 flex justify-end">
              <ul class="flex items-center justify-center">
                <a href="#" class="mr-4">
                  <FaTwitter size={24} className="text-landing-primary" />
                </a>
                <a href="#">
                  <FaLinkedinIn size={24} className="text-landing-primary" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
