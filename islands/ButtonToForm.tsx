import { useEffect, useState } from "preact/hooks";
import ButtonForm from "../components/ButtonForm.tsx";

export default function ButtonToForm() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const specificSession = document.getElementById("contactopen");
      const { top } = specificSession!.getBoundingClientRect();

      if (top && top <= window.innerHeight) {
        setActive(true);
      } else {
        setActive(false);
      }
    }

    self.addEventListener("scroll", handleScroll);

    return () => {
      self.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <ButtonForm active={active} />;
}
