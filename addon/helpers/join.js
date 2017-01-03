import Ember from 'ember';

export function join(strings, { delimiter }) {
  return strings.join(delimiter);
}

export default Ember.Helper.helper(join);
