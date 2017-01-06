import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | text');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(cleanText(' ab '), 'ab');
    assert.deepEqual(collectText(find('td')), ['1', '2', '3']);
  });
});
