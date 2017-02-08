import { pastTense } from 'ember-kns-helpers/helpers/past-tense';
import { module, test } from 'qunit';

module('Unit | Helper | past-tense');

test('value is in exceptions list', function(assert) {
  let result = pastTense(['are']);

  assert.equal(result, 'were', 'returns value from exceptions list');
});

test('value ends in \'e\'', function(assert) {
  let result = pastTense(['die']);

  assert.equal(result, 'died', 'adds a d');
});

test('value ends in [aeiou]c', function(assert) {
  let result = pastTense(['tic']);

  assert.equal(result, 'ticked', 'adds \'ked\'');
});

test('value ends in el', function(assert) {
  let result = pastTense(['travel']);

  assert.equal(result, 'traveled', 'adds \'ed\'');
});

test('value matches /[aeio][aeiou][dlmnprst]$/', function(assert) {
  let result = pastTense(['seed']);

  assert.equal(result, 'seeded', 'adds \'ed\'');
});

test('value matches /[aeiou][bdglmnprst]$/i)', function(assert) {
  let result = pastTense(['congeal']);

  assert.equal(result, 'congealed', 'adds \'ed\'');
});

test('else case', function(assert) {
  let result = pastTense(['embalm']);

  assert.equal(result, 'embalmed', 'adds \'ed\'');
});
