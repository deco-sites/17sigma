import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from "../components/Container.tsx";

export default function LandingFooter() {
  return (
    <footer class="h-[7rem] w-full bg-landing-section">
      <Container>
        <div class="flex mx-auto border">
          <div class="h-[7rem] w-[7rem] mr-[10rem]">
            <img src="../iso.png" alt="" class="h-[100%] w-[100%]" />
          </div>

          <div class="h-12 w-2/4 mt-8 mr-[10rem] flex items-center justify-center">
            <p class="text-white text-[0.7rem]">
              All Rights Reserved © 2022 — 17Sigma
            </p>
          </div>

          <div class="h-11 w-20 mt-8 flex items-center justify-center">
            <a href="#" class="mr-4">
              <FaTwitter size={24} className="text-landing-primary" />
            </a>
            <a href="#">
              <FaLinkedinIn size={24} className="text-landing-primary" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
