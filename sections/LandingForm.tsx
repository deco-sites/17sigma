import ButtonToForm from "../islands/ButtonToForm.tsx";
import Form, { FormLandingProps } from "../islands/Form.tsx";

export default function LandingForm(props: FormLandingProps) {
  return (
    <>
      <Form {...props} />
      <ButtonToForm />
    </>
  );
}
