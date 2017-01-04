import { isPresent as emberIsPresent } from 'ember-utils';
import Helper from 'ember-helper';

export function isPresent([value]) {
  return emberIsPresent(value);
}

export default Helper.helper(isPresent);
