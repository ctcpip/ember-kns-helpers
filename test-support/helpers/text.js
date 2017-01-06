function cleanText(text) {
  return text.replace(/\s{2,}/g, ' ').trim();
};

function collectText(elements) {
  return elements.map((index, e) => Ember.$(e).text()).toArray();
};

export { cleanText, collectText };
