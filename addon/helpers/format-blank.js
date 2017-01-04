import Ember from 'ember';
import Helper from 'ember-helper';

const { isPresent } = Ember;

export function formatBlank([value, replacementValue]) {
  let replacement = (replacementValue) ? replacementValue : '-';
  return isPresent(value) ? value : replacement;
}

export default Helper.helper(formatBlank);
