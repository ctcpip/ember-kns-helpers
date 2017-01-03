import Ember from 'ember';

export function indexOf([_, collection, item, offset]) {
  let maybeIndex = collection.indexOf(item);

  return maybeIndex > -1 ? maybeIndex + (offset || 0) : undefined;
}

export default Ember.Helper.helper(indexOf);
