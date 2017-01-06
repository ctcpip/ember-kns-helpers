import Ember from 'ember';
import {
  cleanText,
  collectText
} from './text';

const { Test: { registerHelper } } = Ember;

export function registerKnsHelpers() {
  registerHelper('cleanText', cleanText);
  registerHelper('collectText', collectText);
};

export default registerKnsHelpers;
