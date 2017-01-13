moment.fn.fiscalYearFirstDay = function() {
  var year = this.month() < 6 ? this.year() - 1 : this.year();
  var month = 6;

  var newDate = new Date(year, month);
  return moment(newDate);
};

moment.fn.fiscalYearLastDay = function() {
  var year = this.month() > 5 ? this.year() + 1 : this.year();
  var month = 5;

  var newDate = new Date(year, month, 30);
  return moment(newDate).endOf('day');
};
