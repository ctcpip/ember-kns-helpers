export default function(dateString) {
  if (typeof dateString !== 'string') {
    throw 'Input must be string';
  }

  let [year, month, day] = dateString.split('-');
  day = day ? day.slice(0, 2) : undefined;
  // Note: months are 0-based
  // Don't use native parse because it is browser dependent and it will assume the date parsed is in UTC and report back in local, you will lose a day if your time zone if < 0 UTC offset
  if (day) {
    return new Date(year, parseInt(month) - 1, day);
  } else {
    return new Date(year, parseInt(month) - 1);
  }
}
