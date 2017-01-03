import Ember from 'ember';

export function isPresent([value]) {
  return Ember.isPresent(value);
}

export default Ember.Helper.helper(isPresent);
