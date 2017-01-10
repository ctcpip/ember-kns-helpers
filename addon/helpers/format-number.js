import numeral from 'numeral';
import Helper from 'ember-helper';

const { isBlank } = Ember;

Number.isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' && value !== value;
};

export function formatNumber([number, format = '0,0']) {
  if (isBlank(number) || isNaN(number)) {
    return '-';
  }

  number = parseFloat(number);
  return numeral(number).format(format);
}

export default Helper.helper(formatNumber);
