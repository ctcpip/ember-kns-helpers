moment.fn.fiscalYearFirstDay = function() {
  let year = this.month() < 6 ? this.year() - 1 : this.year();
  let month = 6;

  let newDate = new Date(year, month);
  return moment(newDate);
};

moment.fn.fiscalYearLastDay = function() {
  let year = this.month() > 5 ? this.year() + 1 : this.year();
  let month = 5;

  let newDate = new Date(year, month, 30);
  return moment(newDate).endOf('day');
};
