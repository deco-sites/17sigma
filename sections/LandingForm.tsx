import ButtonForm from "../components/ButtonForm.tsx";
import Container from "../components/Container.tsx";

export default function LandingForm() {
  return (
    <>
      <div class="container-xl position-relative bg-landing-background">
        <Container>
          <h1 class="mb-5 pt-20 text-[2.5rem] text-white font-bold">
            We would love to hear from you
          </h1>

          <div class="flex flex-wrap">
            <div class="h-[18rem] w-full md:w-[70%]">
              <form action="" class="h-64 mt-1 flex flex-col gap-4">
                <input
                  class="w-[75.5%] border-b border-b-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none"
                  type="text"
                  name="fullName"
                  id="fullNameId"
                  placeholder="FULL NAME *"
                />

                <input
                  class="w-[75.5%] border-b border-b-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none"
                  type="email"
                  name="email"
                  id="emailId"
                  placeholder="EMAIL *"
                />

                <div class="h-24 w-[95%] flex flex-row">
                  <textarea
                    class="h-24 w-full border-b border-landing-primary bg-landing-background text-landing-primary placeholder-landing-primary focus:outline-none"
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
                class="mb-7 h-14 w-60 rounded-full border border-landing-primary bg-landing-background text-landing-primary text-lg cursor-pointer"
                type="button"
                value="+ ATTACHMENT"
              />

              <input
                class="h-14 w-60 rounded-full text-white text-lg bg-landing-primary cursor-pointer"
                type="button"
                value="-> GET IN TOUCH"
              />
            </div>
          </div>
        </Container>
      </div>
      <div class="row flex">
        <div class="col-md-9">
          <p class="mailproblem"></p>
        </div>
      </div>
      <ButtonForm />
    </>
  );
}
