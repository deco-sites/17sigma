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
