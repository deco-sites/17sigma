import { useState } from "preact/hooks";
import Form from "./Form.tsx";
import ThanksContainer from "./ThanksContainer.tsx";
import { h } from "preact";

export default function ChangeForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function getSubmitAction(wasSubmitted: boolean) {
    event?.preventDefault();
    setIsSubmitted(wasSubmitted);
  }

  return (
    <>
      {isSubmitted
        ? <ThanksContainer changeContainer={getSubmitAction} />
        : <Form changeContainer={getSubmitAction} />}
    </>
  );
}
