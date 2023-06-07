import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { Handlers } from "$fresh/server.ts";
import { SendConfig } from "https://deno.land/x/denomailer/mod.ts";

function isValidEmail(email: string) {
  return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email);
}

export const handler: Handlers = {
  async POST(req: Request) {
    const body = await req.formData();

    const smtpConfig = body.get("smtpConfig");
    const to = body.get("to");
    const from = body.get("from");
    const cc = body.get("cc");
    const subject = body.get("subject");
    const content = body.get("content");
    const attachment = body.get("attachment");

    const canSendEmail = smtpConfig && to && from && subject && content;

    if (canSendEmail) {
      if (!isValidEmail(from.toString())) {
        return new Response(
          JSON.stringify({
            error:
              `invalid format for 'fromEmail' value passed: ${from.toString()}`,
          }),
          { status: 400 },
        );
      }

      if (!isValidEmail(to.toString())) {
        return new Response(
          JSON.stringify({
            error: `invalid format for 'toEmail'value passed: ${to.toString()}`,
          }),
          { status: 400 },
        );
      }

      if (cc && !isValidEmail(cc.toString())) {
        return new Response(
          JSON.stringify({
            error: `invalid format for 'ccEmail'value passed: ${cc.toString()}`,
          }),
          { status: 400 },
        );
      }

      const mail: SendConfig = {
        to: to.toString(),
        from: from.toString(),
        subject: subject.toString(),
        content: content.toString(),
      };

      if (cc && isValidEmail(cc.toString())) {
        mail.cc = cc.toString();
      }
      if (attachment) {
        mail.attachments = [JSON.parse(attachment.toString())];
      }

      const { hostname, port, tls, username, password } = JSON.parse(
        smtpConfig.toString(),
      );

      const clientMail = new SMTPClient({
        connection: {
          hostname,
          port,
          tls,
          auth: {
            username,
            password,
          },
        },
      });

      const mailUser = body.get("email");
      const fullName = body.get("fullName");
      const replyMessage = body.get("replyMessage");

      if (replyMessage && fullName && mailUser) {
        const replyMail: SendConfig = {
          to: mailUser.toString(),
          from: from.toString(),
          subject: "Thank you for contacting us!",
          content: replyMessage.toString(),
        };

        await clientMail.send(replyMail);
      }

      await clientMail.send(mail);
      await clientMail.close();
    }

    return new Response(JSON.stringify({ payload: "success" }));
  },
};
