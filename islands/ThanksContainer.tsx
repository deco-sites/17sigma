import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../components/Container.tsx";
import { h } from "preact";

type Props = {
  changeContainer: (wasSubmitted: boolean) => void;
};

export default function ThanksContainer({ changeContainer }: Props) {
  function handleClick(event: h.JSX.TargetedEvent) {
    console.log("entrou na function");
    event.preventDefault();
    changeContainer(false);
  }

  return (
    <div class="bg-landing-background h-[17.5rem]">
      <Container>
        <div class="h-[10.5rem] flex items-center py-4">
          <h3 class="text-white font-bold text-[2.5rem]">
            Thank you for getting in touch!
          </h3>
        </div>
        <button
          class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary flex items-center justify-center cursor-pointer gap-1"
          onClick={handleClick}
        >
          <AiOutlineArrowRight size={20} />
          SEND ANOTHER
        </button>
      </Container>
    </div>
  );
}
