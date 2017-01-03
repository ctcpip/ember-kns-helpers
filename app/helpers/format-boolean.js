import Ember from 'ember';

export function formatBoolean([value]) {
  return value ? 'Yes' : 'No';
}

export default Ember.Helper.helper(formatBoolean);
