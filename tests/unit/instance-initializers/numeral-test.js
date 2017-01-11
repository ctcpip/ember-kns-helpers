import Ember from 'ember';
import { initialize } from 'dummy/instance-initializers/numeral';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';
import numeral from 'numeral';

const { Application, run } = Ember;

module('Unit | Instance Initializer | numeral', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

test('it correctly registers custom formats', function(assert) {
  initialize(this.appInstance);

  assert.equal(numeral(1000).format('kns'), '1,000');
});
