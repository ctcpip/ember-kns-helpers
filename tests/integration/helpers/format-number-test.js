import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { initialize as numeralInitializer } from '../../../instance-initializers/numeral';

numeralInitializer();

moduleForComponent('format-number', 'Integration | helper | {{format-number}}', {
  integration: true
});

test('it defaults to formatting with 0,0', function(assert) {
  this.set('inputValue', '1234');
  this.render(hbs`{{format-number inputValue}}`);
  assert.equal(this.$().text().trim(), '1,234');
});

test(`kns format: it formats undefineds as '-'`, function(assert) {
  this.set('inputValue', undefined);
  this.render(hbs`{{format-number inputValue "kns"}}`);
  assert.equal(this.$().text().trim(), '-');
});

test(`kns format: it formats nulls as '-'`, function(assert) {
  this.set('inputValue', null);
  this.render(hbs`{{format-number inputValue "kns"}}`);
  assert.equal(this.$().text().trim(), '-');
});

test(`kns format: it formats NaNs as '-'`, function(assert) {
  this.set('inputValue', Number('abc'));
  this.render(hbs`{{format-number inputValue}}`);
  assert.equal(this.$().text().trim(), '-');
});

test(`kns format: it formats numbers > 1000 to no decimal places`, function(assert) {
  this.set('inputValue', '12345');
  this.render(hbs`{{format-number inputValue "kns"}}`);
  assert.equal(this.$().text().trim(), '12,345');
});

test(`kns format: it formats 0 as 0`, function(assert) {
  this.set('inputValue', '0');
  this.render(hbs`{{format-number inputValue "kns"}}`);
  assert.equal(this.$().text().trim(), '0');
});

test(`kns format: it formats (0 < value < 0.01) in scientific notation`, function(assert) {
  this.set('inputValue', '0.000123987');
  this.render(hbs`{{format-number inputValue "kns"}}`);
  assert.equal(this.$().text().trim(), '1.24e-4');
});

test(`kns format: else case: it formats and rounds to 2 decimal places`, function(assert) {
  this.set('inputValue', '123.4567');
  this.render(hbs`{{format-number inputValue "kns"}}`);
  assert.equal(this.$().text().trim(), '123.46');
});
