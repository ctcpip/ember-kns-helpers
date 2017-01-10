import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-number', 'Integration | helper | {{format-number}}', {
  integration: true
});

// Replace this with your real tests.
test('it formats numbers with commas and to a specified format', function(assert) {
  this.set('inputValue', 1234);
  this.render(hbs`{{format-number inputValue "0,0"}}`);
  assert.equal(this.$().text().trim(), '1,234');
});

test(`formats NaNs as '-'`, function(assert) {
  this.set('inputValue', Number('abc'));
  this.render(hbs`{{format-number inputValue}}`);
  assert.equal(this.$().text().trim(), '-');
});

