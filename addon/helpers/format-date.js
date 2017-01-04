import Helper from 'ember-helper';
import moment from 'moment';

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

export default Helper.helper(formatDate);
