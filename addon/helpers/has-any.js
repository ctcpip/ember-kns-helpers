import Helper from 'ember-helper';
import { A as emberArray } from 'ember-array/utils';

// Pass in the length of the collection as the first argument.
// This is so the helper recomputes when the collection changes but a helper
// can't observe collection.[], so we pass the length explicitly.
export function hasAny([_, refCollection, testCollection]) {
  return emberArray(refCollection).any((item) => {
    return emberArray(testCollection).includes(item);
  });
}

export default Helper.helper(hasAny);
