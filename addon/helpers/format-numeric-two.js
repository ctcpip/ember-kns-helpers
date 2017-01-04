import Helper from 'ember-helper';
import isBlank from 'ember-utils';

export function formatNumericTwo([value]) {
  if (isBlank(value) || isNaN(value)) {
    return '-';
  }

  value = parseFloat(value).toFixed(2);
  value = parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return value;
}

export default Helper.helper(formatNumericTwo);
