import Ember from 'ember';

Number.isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' && value !== value;
};

export function formatNumeric([value]) {
  if (Ember.isBlank(value) || isNaN(value)) { return '-'; }
  value = parseFloat(value);
  let betweenZeroAndTwoDecimals = value < 0.01 && value > 0;

  if (value >= 1000) {
    value = value.toFixed(0);

  } else if (value < 1000 && value >= 100) {
    value = value.toFixed(1);

  } else if (betweenZeroAndTwoDecimals) {
    value = value.toExponential(2);

  } else if (value === 0) {
    value = value.toFixed(0);

  } else {
    value = value.toFixed(2);
  }

  if (!betweenZeroAndTwoDecimals) { value = parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  return value;
}

export default Ember.Helper.helper(formatNumeric);
