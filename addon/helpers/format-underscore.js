import Ember from 'ember';

export function formatUnderscore([value]) {
  if (value) {
    return Ember.String.capitalize(value.split('_').join(' '));
  } else {
    return '-';
  }
}

export default Ember.Helper.helper(formatUnderscore);
