import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-numeric', 'Integration | helper | {{format-numeric}}', {
  integration: true
});

test(`formats blanks as '-'`, function(assert) {
  this.set('inputValue', '');
  this.render(hbs`{{format-numeric inputValue}}`);
  assert.equal(this.$().text().trim(), '-');
});

test(`formats NaNs as '-'`, function(assert) {
  this.set('inputValue', Number('abc'));
  this.render(hbs`{{format-numeric inputValue}}`);
  assert.equal(this.$().text().trim(), '-');
});

test(`rounds values >= 1000 to 0 decimal places and adds commas`, function(assert) {
  this.set('inputValue', '1000.555');
  this.render(hbs`{{format-numeric inputValue}}`);
  assert.equal(this.$().text().trim(), '1,001');
});

test(`uses scientific notation for values between 0 and 0.01 (not inclusive)`, function(assert) {
  this.set('inputValue', '0.005');
  this.render(hbs`{{format-numeric inputValue}}`);
  assert.equal(this.$().text().trim(), '5.00e-3');
});

test(`formats '0.00...' as 0 (no decimal places)`, function(assert) {
  this.set('inputValue', '0.0000');
  this.render(hbs`{{format-numeric inputValue}}`);
  assert.equal(this.$().text().trim(), '0');
});

test(`else case: rounds to 2 decimal places`, function(assert) {
  this.set('inputValue', '3.5858157');
  this.render(hbs`{{format-numeric inputValue}}`);
  assert.equal(this.$().text().trim(), '3.59');
});
