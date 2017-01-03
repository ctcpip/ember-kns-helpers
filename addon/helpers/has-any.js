import Ember from 'ember';

// Pass in the length of the collection as the first argument.
// This is so the helper recomputes when the collection changes but a helper
// can't observe collection.[], so we pass the length explicitly.
export function hasAny([_, refCollection, testCollection]) {
  return Ember.A(refCollection).any((item) => {
    return Ember.A(testCollection).includes(item);
  });
}

export default Ember.Helper.helper(hasAny);
