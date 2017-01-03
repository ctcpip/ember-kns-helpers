import Ember from 'ember';

// Pass in the length of the collection as the first argument.
// This is so the helper recomputes when the collection changes but a helper
// can't observe collection.[], so we pass the length explicitly.
export function contains([_, collection, item]) {
  if (typeof collection === 'object') {
    return Ember.A(collection).includes(item);
  } else if (typeof collection === 'string') {
    return collection.indexOf(item) !== -1;
  }
}

export default Ember.Helper.helper(contains);
