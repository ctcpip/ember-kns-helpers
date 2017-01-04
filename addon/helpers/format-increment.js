import Helper from 'ember-helper';

export function formatIncrement([number]) {
  return number + 1;
}

export default Helper.helper(formatIncrement);
