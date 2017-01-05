import Helper from 'ember-helper';
import moment from 'moment';
import Ember from 'ember';

const { isEqual } = Ember;

export function formatDateRange([startedOn, endedOn]) {
  if (startedOn && endedOn) {
    let start = moment(startedOn);
    let end = moment(endedOn);
    let format = '';

    // Same year
    if (isEqual(start.get('year'), end.get('year'))) {

      // Same month
      if (isEqual(start.get('month'), end.get('month'))) {

        // Same day
        if (isEqual(start.get('date'), end.get('date'))) {
          format = `${start.format('HH:mm')} - ${end.format('HH:mm, D MMM')}`;
        } else {
          format = `${start.format('D')} - ${end.format('D MMM')}`;
        }
      } else {
        format = `${start.format('D MMM')} - ${end.format('D MMM')}`;
      }
      format += `, ${start.format('YYYY')}`;
    } else {
      // Financial year
      if (start.get('month') === 6 && start.get('date') === 1 &&
          end.get('month') === 5 && end.get('date') === 30) {
        format = `FY ${start.format('YYYY')}-${end.format('YY')}`;
      } else {
        format = `${start.format('D MMM, YYYY')} - ${end.format('D MMM, YYYY')}`;
      }
    }
    return format;
  }
}

export default Helper.helper(formatDateRange);
