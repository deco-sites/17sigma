// deno-lint-ignore-file
import { useEffect, useRef, useState } from "preact/hooks";
// import ButtonForm from "../components/ButtonForm.tsx";
import Container from "../components/Container.tsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import LoadingAnimation from "../components/LoadingAnimation.tsx";
// import { h } from "preact";
import { ChangeEvent } from "https://esm.sh/v118/preact@10.13.2/compat/src/index.js";
import { isValidEmail, sendMail } from "../helpers/index.ts";

export interface HeaderKey {
  keyName: string;
  value: string;
}

type HeaderKeysType = {
  [$key: string]: string;
};

export interface FormLandingProps {
  /**
   * @description write a initial text for your form
   */
  textStartForm: string;

  /**
   * @description write a thank you text for your form
   */
  textThanksForm: string;

  /**
   * @description where the form should send the data
   */
  endpoint: string;

  /**
   * @description add the keys to the request header if needed
   */
  headerkeys: HeaderKey[];

  inputName: string;
  inputEmail: string;
  inputUpload: string;
  inputMessage: string;
}
export default function Form({
  textStartForm,
  textThanksForm,
  endpoint,
  headerkeys,
  inputName,
  inputEmail,
  inputUpload,
  inputMessage,
}: FormLandingProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(true);
  const [file, setFile] = useState<File>();
  const [fileBase64URL, setFileBase64URL] = useState<
    string | ArrayBuffer | null
  >();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setFile(e.currentTarget.files[0]);
    }
  };

  const getBase64 = (file: File) => {
    return new Promise((resolve) => {
      // Make new FileReader
      const reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        setFileBase64URL(reader.result);
        resolve(reader.result);
      };
    });
  };

  const handlerReseForm = () => {
    setError(false);
    setName("");
    setEmail("");
    setMessage("");
  };
  const handlerSubmit = async (event: Event) => {
    event.preventDefault();

    const headers: HeaderKeysType = {};

    if (headerkeys.length >= 1) {
      headerkeys.map((key) => {
        headers[key.keyName] = key.value;
      });
    }
    // console.log(headers);

    if (
      form.current && name.length >= 1 && isValidEmail(email) &&
      message.length >= 1
    ) {
      setIsLoading(true);
      const mail = new FormData(form.current);

      const send = await fetch(endpoint, {
        method: "POST",
        body: mail,
        headers,
      });

      if (!send.ok || send.status !== 200) {
        setError(true);
      } else {
        handlerReseForm();
      }
      setIsSubmitted(true);
      setIsLoading(false);
    } else if (!isValidEmail(email)) {
      alert("Please enter a correct email!");
    }
  };

  return (
    <div>
      {isSubmitted &&
        (
          <div class="bg-landing-background h-[17.5rem]">
            <Container>
              <div class="h-[10.5rem] flex items-center py-4">
                {error && (
                  <p class="text-[2.01rem] text-white font-medium mb-4">
                    There was an error trying to process your request.
                  </p>
                )}
                {!error && (
                  <h3 class="text-white font-bold text-[2.5rem]">
                    Thank you for getting in touch!
                  </h3>
                )}
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary flex items-center justify-center cursor-pointer gap-1"
              >
                <AiOutlineArrowRight size={20} />
                SEND ANOTHER
              </button>
            </Container>
          </div>
        )}

      {!isSubmitted &&
        (
          <form onSubmit={handlerSubmit} ref={form}>
            <div class="container-xl relative bg-landing-background">
              {isLoading && <LoadingAnimation />}
              <Container>
                <div class="h-[10rem] flex items-center py-4">
                  <h3 class="text-white font-bold text-[2.5rem]">
                    {textStartForm}
                  </h3>
                </div>
                <div class="flex flex-wrap items-end mt-5 pb-4 gap-5">
                  <div class="h-[14rem] w-full md:w-[75%] flex flex-col justify-between">
                    <input
                      value={name}
                      onChange={({ currentTarget }) =>
                        setName(currentTarget.value)}
                      class="w-[75.5%] border-b border-b-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none pt-1 pb-1"
                      type="text"
                      name={inputName}
                      id={inputName}
                      placeholder={"FULL NAME *"}
                      required
                    />

                    <input
                      class="w-[75.5%] border-b border-b-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none pb-1"
                      onChange={({ currentTarget }) =>
                        setEmail(currentTarget.value)}
                      type="email"
                      value={email}
                      name={inputEmail}
                      id={inputEmail}
                      placeholder={"EMAIL *"}
                      required
                    />

                    <div class="h-[6rem] w-[100%] flex flex-row">
                      <textarea
                        class="h-[4rem] w-full border-b border-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none"
                        onChange={({ currentTarget }) =>
                          setMessage(currentTarget.value)}
                        name={inputMessage}
                        value={message}
                        id={inputMessage}
                        placeholder={"SAY SOMETHING *"}
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
                      {"+ ATTACHMENT"}
                      <input
                        type="file"
                        name={inputUpload}
                        id={inputUpload}
                        class="hidden"
                        onChange={(e) => handleFileChange(e)}
                      />
                    </label>

                    <button
                      type="submit"
                      class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary flex items-center justify-center cursor-pointer gap-1"
                    >
                      {<AiOutlineArrowRight size={20} />}
                      {"GET IN TOUCH"}
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </form>
        )}
    </div>
  );
}
