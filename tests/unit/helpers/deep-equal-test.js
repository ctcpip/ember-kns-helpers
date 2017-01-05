import { deepEqual } from 'ember-kns-helpers/helpers/deep-equal';
import { module, test } from 'qunit';

module('Unit | Helper | deepEqual');

test('undefined when given non arrays', function(assert) {
  let result = deepEqual(42, []);
  assert.notOk(result);
});

test('true despite order', function(assert) {
  let result = deepEqual([1,2], [2,1]);
  assert.ok(result);
});

test('false when lengths different', function(assert) {
  let result = deepEqual([1], [2,1]);
  assert.notOk(result);
});
