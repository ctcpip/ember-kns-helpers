import Helper from 'ember-helper';
import { capitalize as emberCapitalize } from 'ember-string';

export function formatUnderscore([value]) {
  if (value) {
    return emberCapitalize(value.split('_').join(' '));
  } else {
    return '-';
  }
}

export default Helper.helper(formatUnderscore);
