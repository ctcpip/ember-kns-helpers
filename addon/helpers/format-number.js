import numeral from 'numeral';
import Helper from 'ember-helper';

export function formatNumber([number, format = '0,0']) {
  if (typeof number === 'undefined') {
    return '-';
  }

  return numeral(number).format(format);
}

export default Helper.helper(formatNumber);
