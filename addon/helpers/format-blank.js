import isPresent from 'ember-utils';
import Helper from 'ember-helper';

export function formatBlank([value, replacementValue]) {
  let replacement = (replacementValue) ? replacementValue : '-';
  return isPresent(value) ? value : replacement;
}

export default Helper.helper(formatBlank);
