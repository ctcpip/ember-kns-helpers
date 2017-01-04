import Helper from 'ember-helper';

export function formatPercentage([value]) {
  return `${ value * 100 }%`;
}

export default Helper.helper(formatPercentage);
