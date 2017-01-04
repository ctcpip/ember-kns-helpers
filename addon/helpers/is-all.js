import Helper from 'ember-helper';
import { A as emberArray } from 'ember-array/utils';

export function isAll([_, c, r, n]) {
  let collection = emberArray(c);
  let referenceCollection = emberArray(r);

  if (n) {
    return collection.length === n && collection.every((item) => referenceCollection.includes(item));
  } else {
    return collection.every((item) => {
      return referenceCollection.includes(item);
    });
  }
}

export default Helper.helper(isAll);
