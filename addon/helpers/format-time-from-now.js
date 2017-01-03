/* jshint undef:false */

import Helper from 'ember-helper';

export function formatTimeFromNow([value]) {
  // Set the relative time threshold for months to 30 days.
  moment.relativeTimeThreshold('M', 30);

  if (value) {
    let date = moment(new Date(value));

    // For events that occured today
    if (moment().diff(date, 'days') === 0) {
      return 'Today';
    } else {
      return date.fromNow();
    }
  } else {
    return '-';
  }
}

export default Helper.helper(formatTimeFromNow);
