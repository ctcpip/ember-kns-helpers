import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-time-from-now', 'Integration | helper | {{format-time-from-now}}', {
  integration: true
});

test(`returns 'Today' for today`, function(assert) {
  this.set('inputValue', Date.now());
  this.render(hbs`{{format-time-from-now inputValue}}`);
  assert.equal(this.$().text().trim(), 'Today');
});
