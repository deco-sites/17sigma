export function accentuationReplaceText(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function filteringTextValue(target: string, search: string) {
  return accentuationReplaceText(target)
    .toLowerCase()
    .includes(
      accentuationReplaceText(search)
        .toLowerCase(),
    );
}
