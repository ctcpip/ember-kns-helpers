import Helper from 'ember-helper';

export function formatBoolean([value]) {
  return value ? 'Yes' : 'No';
}

export default Helper.helper(formatBoolean);
