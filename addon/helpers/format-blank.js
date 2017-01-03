import Ember from 'ember';

export function formatBlank([value, replacementValue]) {
  let replacement = (replacementValue) ? replacementValue : '-';
  return Ember.isPresent(value) ? value : replacement;
}

export default Ember.Helper.helper(formatBlank);
