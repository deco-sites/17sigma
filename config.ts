import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";

export const clientMail = new SMTPClient({
  connection: {
    hostname: "smtp-relay.sendinblue.com",
    port: 465,
    tls: true,
    auth: {
      username: "17sigmacontact@gmail.com",
      password:
        "xsmtpsib-6c4e85c3cfaacf8bbfd91f4a326a809eb1ac1803bd399820142bd41874db37b6-HPCALw16gfQrTaVI",
    },
  },
});
