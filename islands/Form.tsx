// deno-lint-ignore-file
import { useEffect, useRef, useState } from "preact/hooks";
// import ButtonForm from "../components/ButtonForm.tsx";
import Container from "../components/Container.tsx";
import { AiOutlineArrowRight } from "react-icons/ai";
import LoadingAnimation from "../components/LoadingAnimation.tsx";
// import { h } from "preact";
import { ChangeEvent } from "https://esm.sh/v118/preact@10.13.2/compat/src/index.js";
import { sendMail } from "../helpers/index.ts";


export interface FormLandingProps {
  /** @description  */
  hostname: string;

  /** @description */
  port: number;

  /** @description */
  username: string;

  /** @description */
  password: string;

  /** @description */
  tls: boolean;

  cc?: string;

  /** @description The email that will receive new messages */
  to: string;

  /** @description The email that will be displayed in users' inbox*/
  from: string;

  subject: string;

  /** @description This will be the message the user will see in their email*/
  replyMessage?: string;

  // title?: string;
  // first_input_name?: string;
  // first_input_id?: string;
  // first_input_placeholder?: string;
  // second_input_name?: string;
  // second_input_id?: string;
  // second_input_placeholder?: string;
  // thirsty_input_name?: string;
  // thirsty_input_id?: string;
  // thirsty_input_placeholder?: string;
  // attachment_button_text?: string;
  // submit_button_icon?: string;
  // submit_button_text?: string;
}
export default function Form({
  from,
  to,
  hostname,
  password,
  port,
  username,
  subject,
  cc,
  tls,
  replyMessage,
  // attachment_button_text,
  // first_input_id,
  // first_input_name,
  // first_input_placeholder,
  // second_input_id,
  // second_input_name,
  // second_input_placeholder,
  // thirsty_input_id,
  // thirsty_input_name,
  // thirsty_input_placeholder,
  // submit_button_icon,
  // submit_button_text,
  // title,
}: FormLandingProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      getBase64(e.currentTarget.files[0])
        .then((result) => {
          console.log("File Is", result);
        })
        .catch((err) => {
          console.log(err);
        });
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
        console.log("Called", reader);
        setFileBase64URL(reader.result);
        resolve(reader.result);
      };
    });
  };

  const handlerSubmit = async (event: Event) => {
    event.preventDefault();

    const smtpConfig = {
      hostname,
      password,
      username,
      port,
      tls,
    };

    // const send = await Email.send({
    //   Host : smtpConfig.hostname,
    //   Username: smtpConfig.username,
    //   Password: smtpConfig.password,
    //   To : to,
    //   From : from,
    //   Subject : subject,
    //   Body : message
    // })

    // if(send)
    // {
    //   console.log(send)
    // }

    if (form.current && name && email && message) {
      // const templateParams = {
      //   from_name: 'marcosas.soares2@gmail.com',
      //   reply_to: 'marcosas.soares2@gmail.com',
      //   message: 'Teste'
      // }

      const mail = new FormData(form.current);

      mail.delete("message");
      mail.delete("file");

      if (!replyMessage) {
        mail.delete("full");
        mail.delete("email");
      }

      if (replyMessage) {
        mail.append("replyMessage", replyMessage);
      }

      mail.append("smtpConfig", JSON.stringify(smtpConfig));
      mail.append("to", to);
      mail.append("from", from);
      mail.append("subject", subject);

      if (cc) {
        mail.append("cc", cc);
      }

      if (file && fileBase64URL) {
        const nameFile = (file.name + new Date().toDateString().trim())
          .toLocaleLowerCase();
        // console.log(nameFile);

        mail.append(
          "attachment",
          JSON.stringify({
            encoding: "base64",
            name: nameFile,
            content: fileBase64URL.toString(),
          }),
        );
      }

      mail.append(
        "content",
        `${name} got in touch and left the following message: ${message} 
        contact e-mail: ${email}`,
      );

      setIsLoading(true);

      const request = await sendMail(mail);

      if (request.status === 200) {
        setIsLoading(false);
        setIsSubmitted(true);
      }

      setName("");
      setEmail("");
      setMessage("");
    }
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
              <button
                onClick={() => setIsSubmitted(false)}
                class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary flex items-center justify-center cursor-pointer gap-1"
              >
                <AiOutlineArrowRight size={20} />
                SEND ANOTHER
              </button>
            </Container>
          </div>
        )
        : (
          <form onSubmit={handlerSubmit} ref={form}>
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
                      name={"fullName"}
                      id={"fullName"}
                      placeholder={"FULL NAME *"}
                      required
                    />

                    <input
                      class="w-[75.5%] border-b border-b-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none pb-1"
                      onChange={({ currentTarget }) =>
                        setEmail(currentTarget.value)}
                      type="email"
                      name={"email"}
                      id={"enmail"}
                      placeholder={"EMAIL *"}
                      required
                    />

                    <div class="h-[6rem] w-[100%] flex flex-row">
                      <textarea
                        class="h-[4rem] w-full border-b border-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none"
                        onChange={({ currentTarget }) =>
                          setMessage(currentTarget.value)}
                        name={"message"}
                        id={"message"}
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
                      {<AiOutlineArrowRight size={20} />}
                      {"GET IN TOUCH"}
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
