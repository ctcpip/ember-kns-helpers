import Ember from 'ember';
import {
  cleanTextForAcceptance,
  collectTextForAcceptance
} from './text';

import {
  waitForModalEvent,
  waitForModalClose
} from './wait-for-bs-modal';

import {
  waitForDatepickerEvent,
  waitForDatepickerChangeDate
} from './wait-for-datepicker';

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
  registerAsyncHelper('waitForDatepickerChangeDate', waitForDatepickerChangeDate);
  registerAsyncHelper('waitForDatepickerEvent', waitForDatepickerEvent);
}

export default registerKnsHelpers;
