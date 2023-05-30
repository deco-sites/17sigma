// João teu código do form vai aqui

//Resposta: Tu é brabo!

import ButtonForm from "../components/ButtonForm.tsx";

export default function LandingForm() {
  return (
    <>
      <div class="h-[28rem] bg-landing-background border-b-transparent">
        <div class="mb-5 pl-24 pt-20 text-[2.5rem] text-white font-bold">
          We would love to hear from you
        </div>

        <div class="flex flex-row">
          <div class="h-[18rem] w-[70%]">
            <form action="" class="h-64 mt-1 ml-10 flex flex-col">
              <input
                class="ml-14 w-[75.5%] border-b border-b-landing-primary bg-landing-background pb-2 pt-6 text-landing-primary placeholder-landing-primary focus:outline-none"
                type="text"
                name="fullName"
                id="fullNameId"
                placeholder="FULL NAME *"
              />

              <input
                class="ml-14 w-[75.5%] border-b border-b-landing-primary bg-landing-background pb-2 pt-6 text-landing-primary placeholder-landing-primary focus:outline-none"
                type="email"
                name="email"
                id="emailId"
                placeholder="EMAIL *"
              />

              <div class="h-24 w-[95%] ml-14 flex flex-row">
                <textarea
                  class="h-24 w-full border-b border-landing-primary bg-landing-background pt-8 pb-2 text-landing-primary placeholder-landing-primary focus:outline-none"
                  name="textarea"
                  id="textareaId"
                  placeholder="SAY SOMETHING *"
                >
                </textarea>
              </div>
            </form>
          </div>

          <div class="h-40 flex flex-col mt-[5rem] ml-8">
            <input
              class="mb-7 h-14 w-60 rounded-full border border-landing-primary bg-landing-background text-landing-primary text-lg"
              type="button"
              value="+ ATTACHMENT"
            />

            <input
              class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary"
              type="button"
              value="-> GET IN TOUCH"
            />
          </div>
        </div>
      </div>
      <ButtonForm />
    </>
  );
}
