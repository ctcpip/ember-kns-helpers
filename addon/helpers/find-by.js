import Ember from 'ember';

export function findBy([_, collection, path, key]) {
  if (collection) {
    return Ember.A(collection).findBy(path, key);
  }
}

export default Ember.Helper.helper(findBy);
