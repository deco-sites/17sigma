import { Attachment } from "https://deno.land/x/denomailer@1.6.0/config/mail/attachments.ts";

export interface FormProps {
  fullname: string;
  email: string;
  message: string;
  upload?: Attachment[];
}

export interface MailConfigSMTP {
  hostname: string;

  /** @description */
  port: number;

  /** @description */
  username: string;

  /** @description */
  password: string;

  /** @description */
  tls?: boolean | undefined;
}

export interface MailProps {
  from: string;
  to: string;
  subject: string;
  content: string;
  html?: string;
  cc?: string;
  attachments?: Attachment[];
}

export function accentuationReplaceText(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function filteringTextValue(target: string, search?: string) {
  if (search) {
    return accentuationReplaceText(target)
      .toLowerCase()
      .includes(
        accentuationReplaceText(search)
          .toLowerCase(),
      );
  }
}

export function orderArrayAZ(data: string[]) {
  return data.map((value) => accentuationReplaceText(value)).sort();
}

export async function sendMail(mail: FormData) {
  // console.log(Object.fromEntries(mail));
  return await fetch(`${location.origin}/api/v1/mail/send`, {
    method: "POST",
    body: mail,
  });
}
