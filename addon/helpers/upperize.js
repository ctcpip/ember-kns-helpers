import Ember from 'ember';

export function upperize([params]) {
  return params.toUpperCase();
}

export default Ember.Helper.helper(upperize);
