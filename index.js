/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-kns-helpers',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    var vendor = this.treePaths.vendor;
    app.import(vendor + '/moment-ext.js');
  }
};
