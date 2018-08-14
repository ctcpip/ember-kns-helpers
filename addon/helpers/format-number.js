import numeral from 'numeral';
import Ember from 'ember';
import Helper from 'ember-helper';

export function formatNumber([number, format = 'kns', zeroFormat = '0']) {
  if (Ember.isArray(number)) { number = number[0]; }

  if (typeof number === 'undefined') {
    return '-';
  }

  numeral.zeroFormat(zeroFormat);

  return numeral(number).format(format);
}

export default Helper.helper(formatNumber);
