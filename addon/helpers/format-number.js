import numeral from 'numeral';
import Helper from 'ember-helper';

export function formatNumber([number, format = 'kns']) {
  if (typeof number === 'undefined') {
    return '-';
  }

  return numeral(number).format(format);
}

export default Helper.helper(formatNumber);
