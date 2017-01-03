import Ember from 'ember';

export function formatNumericTwo([value]) {
  if (Ember.isBlank(value) || isNaN(value)) { return '-'; }

  value = parseFloat(value).toFixed(2);
  value = parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return value;
}

export default Ember.Helper.helper(formatNumericTwo);
