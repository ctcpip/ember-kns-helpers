/* jshint undef:false */

import Ember from 'ember';

export function fiscalYearLabel([input]) {
  if (input) {
    let year;
    switch (typeof input) {
      case 'string':
        year = moment(new Date(input)).fiscalYearLastDay().year();
        break;
      case 'object':
        if (input._isAMomentObject) {
          year = input.fiscalYearLastDay().year();
        } else if (typeof input.getMonth === 'function') {
          year = moment(input).fiscalYearLastDay().year();
        }
        break;
      case 'number':
        year = input;
        break;
      default:
        throw 'No valid transformation';
    }
    return `${year - 1}-${year.toString().slice(-2)}`;
  }
}

export default Ember.Helper.helper(fiscalYearLabel);
