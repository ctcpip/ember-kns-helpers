import Ember from 'ember';
import {
  cleanTextForAcceptance,
  collectTextForAcceptance
} from './text';

const { Test: { registerHelper } } = Ember;

export function registerKnsHelpers() {
  registerHelper('cleanText', cleanTextForAcceptance);
  registerHelper('collectText', collectTextForAcceptance);
};

export default registerKnsHelpers;
