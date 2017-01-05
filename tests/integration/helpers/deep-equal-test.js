import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import { A as emberArray } from 'ember-array/utils';

const { run } = Ember;

moduleForComponent('deep-equal', 'Integration | Helper | {{deep-equal}}', {
  integration: true
});

test('it renders', function(assert) {
  this.set('array1', emberArray([1, 2]));
  this.set('array2', emberArray([1, 2]));

  this.render(hbs`
    {{#if (deep-equal array1 array2)}}
      Returns true
    {{else}}
      Returns false
    {{/if}}
  `);

  assert.equal(this.$().text().trim(), 'Returns true', 'correctly compares arrays');

  run(() => {
    this.get('array2').pushObject(3);
  });

  return wait().then(() => {
    assert.equal(this.$().text().trim(), 'Returns false', 'correctly computes updates to arrays');
  });
});

