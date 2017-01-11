import Ember from 'ember';
import numeral from 'numeral';

const { isBlank } = Ember;

Number.isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' && value !== value;
};

export function initialize(/* appInstance */) {
  numeral.nullFormat('-');

  numeral.register('format', 'kns', {
    regexps: {
      format: /kns/,
      unformat: /kns/
    },
    format(number, format, roundingFunction) {
      // NOTE: this version of numeral.js coerces undefined to 0. Short circuit it in addon/helpers/format-number.
      if (isBlank(number) || isNaN(number)) {
        return '-';
      }

      if (number >= 1000) {
        return numeral._.numberToFormat(number, '0,0', roundingFunction);
      } else if (number === 0) {
        return '0';
      } else if (number < 0.01 && number > 0) {
        return numeral(number).format('0.00e+0');
      } else {
        return numeral._.numberToFormat(number, '0,0.00', roundingFunction);
      }
    },
    unformat(string) {
      return numeral._.stringToNumber(string);
    }
  });
}

export default {
  name: 'numeral',
  initialize
};
