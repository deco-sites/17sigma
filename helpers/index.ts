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

export function isValidEmail(email: string) {
  return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email);
}
