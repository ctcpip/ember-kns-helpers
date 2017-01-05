import Helper from 'ember-helper';
import { A as emberArray, isEmberArray } from 'ember-array/utils';
import computed from 'ember-computed';
import observer from 'ember-metal/observer';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export function deepEqual(a1, a2) {
  if (!isEmberArray(a1) || !isEmberArray(a2)) {
    return undefined;
  }

  if (a1.length !== a2.length) {
    return false;
  }

  return a1.every((item) => {
    return a2.includes(item);
  });
}

export default Helper.extend({
  content: computed('array1.[]', 'array2.[]', function() {
    let array1 = get(this, 'array1');
    let array2 = get(this, 'array2');

    return deepEqual(array1, array2);
  }),

  compute([array1, array2]) {
    set(this, 'array1', array1);
    set(this, 'array2', array2);

    return this.get('content');
  },

  contentDidChange: observer('content', function() {
    this.recompute();
  })
});
