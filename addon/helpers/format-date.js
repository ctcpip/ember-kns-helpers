/* jshint undef:false */

import Ember from 'ember';

export function formatDate([value, format]) {
  if (value) {
    if (format) {
      return moment(value).format(format);
    } else {
      return moment(value).format('LL');
    }
  } else {
    return '-';
  }
}

export default Ember.Helper.helper(formatDate);
