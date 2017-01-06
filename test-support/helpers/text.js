export function cleanText(text) {
  return text.replace(/\s{2,}/g, ' ').trim();
};

export function collectText(elements) {
  return elements.map((index, e) => $(e).text()).toArray();
};

export function cleanTextForAcceptance(app, text) {
  return cleanText(text);
};

export function collectTextForAcceptance(app, elements) {
  return collectText(elements);
};
