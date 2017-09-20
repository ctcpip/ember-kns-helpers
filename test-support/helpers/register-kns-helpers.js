import Ember from 'ember';
import {
  cleanTextForAcceptance,
  collectTextForAcceptance
} from './text';

import {
  waitForModalEvent,
  waitForModalClose
} from './wait-for-bs-modal';

const {
  Test: {
    registerHelper,
    registerAsyncHelper
  }
} = Ember;

export function registerKnsHelpers() {
  registerHelper('cleanText', cleanTextForAcceptance);
  registerHelper('collectText', collectTextForAcceptance);
  registerAsyncHelper('waitForModalClose', waitForModalClose);
  registerAsyncHelper('waitForModalEvent', waitForModalEvent);
}

export default registerKnsHelpers;
