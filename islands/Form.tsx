import { MutableRef, useEffect, useRef, useState } from "preact/hooks";
import ButtonForm from "../components/ButtonForm.tsx";
import Container from "../components/Container.tsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import LoadingAnimation from "../components/LoadingAnimation.tsx";
import { h } from "preact";
import { ChangeEvent } from "https://esm.sh/v118/preact@10.13.2/compat/src/index.js";

export interface Props {
  title?: string;
  first_input_name?: string;
  first_input_id?: string;
  first_input_placeholder?: string;
  second_input_name?: string;
  second_input_id?: string;
  second_input_placeholder?: string;
  thirsty_input_name?: string;
  thirsty_input_id?: string;
  thirsty_input_placeholder?: string;
  attachment_button_text?: string;
  submit_button_icon?: string;
  submit_button_text?: string;
}

export default function Form({
  attachment_button_text,
  first_input_id,
  first_input_name,
  first_input_placeholder,
  second_input_id,
  second_input_name,
  second_input_placeholder,
  thirsty_input_id,
  thirsty_input_name,
  thirsty_input_placeholder,
  submit_button_icon,
  submit_button_text,
  title,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setFile(e.currentTarget.files[0]);
    }
  };

  const handlerSubmit = (event: Event) => {
    console.log(file);

    if (name && email && message) {
      setName("");
      setEmail("");
      setMessage("");
    }
    setIsLoading(true);
    // setIsSubmitted(true);
    event.preventDefault();
  };

  return (
    <>
      {isSubmitted
        ? (
          <div class="bg-landing-background h-[17.5rem]">
            <Container>
              <div class="h-[10.5rem] flex items-center py-4">
                <h3 class="text-white font-bold text-[2.5rem]">
                  Thank you for getting in touch!
                </h3>
              </div>
              <button class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary flex items-center justify-center cursor-pointer gap-1" // onClick={handleClick}
              >
                <AiOutlineArrowRight size={20} />
                SEND ANOTHER
              </button>
            </Container>
          </div>
        )
        : (
          <form onSubmit={handlerSubmit}>
            <div class="container-xl relative bg-landing-background">
              {isLoading && <LoadingAnimation />}
              <Container>
                <div class="h-[10rem] flex items-center py-4">
                  <h3 class="text-white font-bold text-[2.5rem]">
                    {isSubmitted
                      ? "Thank you for getting in touch!"
                      : "We would love to hear from you"}
                  </h3>
                </div>

                <div class="flex flex-wrap items-end mt-5 pb-4 gap-5">
                  <div class="h-[14rem] w-full md:w-[75%] flex flex-col justify-between">
                    <input
                      onChange={({ currentTarget }) =>
                        setName(currentTarget.value)}
                      class="w-[75.5%] border-b border-b-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none pt-1 pb-1"
                      type="text"
                      name={first_input_name ? first_input_name : "fullName"}
                      id={first_input_id ? first_input_id : "fullNameId"}
                      placeholder={first_input_placeholder
                        ? first_input_placeholder
                        : "FULL NAME *"}
                      required
                    />

                    <input
                      class="w-[75.5%] border-b border-b-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none pb-1"
                      onChange={({ currentTarget }) =>
                        setEmail(currentTarget.value)}
                      type="email"
                      name={second_input_name ? second_input_name : "email"}
                      id={second_input_id ? second_input_id : "emailId"}
                      placeholder={second_input_placeholder
                        ? second_input_placeholder
                        : "EMAIL *"}
                      required
                    />

                    <div class="h-[6rem] w-[100%] flex flex-row">
                      <textarea
                        class="h-[4rem] w-full border-b border-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none"
                        onChange={({ currentTarget }) =>
                          setMessage(currentTarget.value)}
                        name={thirsty_input_name
                          ? thirsty_input_name
                          : "textarea"}
                        id={thirsty_input_id ? thirsty_input_id : "textareaId"}
                        placeholder={thirsty_input_placeholder
                          ? thirsty_input_placeholder
                          : "SAY SOMETHING *"}
                      >
                      </textarea>
                    </div>
                    <div class="h-[1rem] flex bg-landing-background">
                      <div class="col-md-9">
                        <p class="mailproblem"></p>
                      </div>
                    </div>
                  </div>

                  <div class="h-[9rem] flex flex-col md:mb-16">
                    <label class="h-14 w-60 mb-7 rounded-full border border-landing-primary bg-landing-background text-landing-primary text-lg flex items-center justify-center cursor-pointer">
                      {attachment_button_text
                        ? attachment_button_text
                        : "+ ATTACHMENT"}
                      <input
                        type="file"
                        name="file"
                        id="fileId"
                        class="hidden"
                        onChange={(e) => handleFileChange(e)}
                      />
                    </label>

                    <button
                      type="submit"
                      class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary flex items-center justify-center cursor-pointer gap-1"
                    >
                      {submit_button_icon
                        ? submit_button_icon
                        : <AiOutlineArrowRight size={20} />}
                      {submit_button_text ? submit_button_text : "GET IN TOUCH"}
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </form>
        )}
    </>
  );
}
