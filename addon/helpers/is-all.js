import Ember from 'ember';

export function isAll([_, c, r, n]) {
  let collection = Ember.A(c);
  let referenceCollection = Ember.A(r);

  if (n) {
    return collection.length === n && collection.every(item => referenceCollection.includes(item));
  } else {
    return collection.every((item) => {
      return referenceCollection.includes(item);
    });
  }
}

export default Ember.Helper.helper(isAll);
