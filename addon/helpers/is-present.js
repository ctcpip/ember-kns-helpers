import Ember from 'ember';
import Helper from 'ember-helper';

const { isPresent: emberIsPresent } = Ember;

export function isPresent([value]) {
  return emberIsPresent(value);
}

export default Helper.helper(isPresent);
