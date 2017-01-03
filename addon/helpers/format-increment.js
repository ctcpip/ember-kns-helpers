import Ember from 'ember';

export function formatIncrement([number]) {
  return number + 1;
}

export default Ember.Helper.helper(formatIncrement);
