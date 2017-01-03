import Ember from 'ember';

export function formatPercentage([value]) {
  return `${ value * 100 }%`;
}

export default Ember.Helper.helper(formatPercentage);
