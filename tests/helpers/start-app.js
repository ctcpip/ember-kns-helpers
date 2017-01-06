import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import registerKnsHelpers from './register-kns-helpers';

const {
  assign: emberAssign,
  merge: emberMerge,
  run
} = Ember;

const assign = emberAssign || emberMerge;

export default function startApp(attrs) {
  let application;

  let attributes = assign({}, config.APP);
  attributes = assign(attributes, attrs); // use defaults, but you can override;

  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    registerKnsHelpers();
    application.injectTestHelpers();
  });

  return application;
}
