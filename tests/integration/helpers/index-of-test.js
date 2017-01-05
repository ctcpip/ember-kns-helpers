import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import { A as emberArray } from 'ember-array/utils';

const { run } = Ember;

moduleForComponent('index-of', 'Integration | Helper | {{index-of}}', {
  integration: true
});

test('it renders', function(assert) {
  this.set('arr', emberArray([1, 2, 3, 4]));

  this.render(hbs`{{index-of 4 arr}}`);

  assert.equal(this.$().text().trim(), 3);

  run(() => {
    this.get('arr').unshiftObject(0);
  });

  return wait().then(() => {
    assert.equal(this.$().text().trim(), 4, 'correctly computes updates to array');
  });
});

