import Ember from 'ember';

export function capitalizeHelper([string]) {
  return Ember.String.capitalize(string);
}

export default Ember.Helper.helper(capitalizeHelper);
