import Helper from 'ember-helper';
import { A as emberArray, isEmberArray } from 'ember-array/utils';
import computed from 'ember-computed';
import observer from 'ember-metal/observer';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export function indexOf(item, array, offset) {
  if (!isEmberArray(array)) {
    return undefined;
  }

  let maybeIndex = emberArray(array).indexOf(item);
  return maybeIndex > -1 ? maybeIndex + (offset || 0) : undefined;
}

export default Helper.extend({
  content: computed('item', 'array.[]', 'offset', function() {
    let item = get(this, 'item');
    let array = get(this, 'array');
    let offset = get(this, 'offset');

    return indexOf(item, array, offset);
  }),

  compute([item, array, offset]) {
    set(this, 'item', item);
    set(this, 'array', array);
    set(this, 'offset', offset);

    return this.get('content');
  },

  contentDidChange: observer('content', function() {
    this.recompute();
  })
});
