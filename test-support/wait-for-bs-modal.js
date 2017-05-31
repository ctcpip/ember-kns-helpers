/* global andThen */

import Ember from 'ember';

const { Test: { registerWaiter } } = Ember;

export function waitForModalEvent(app, selector, event) {
  let modal = find(selector);
  let fired = false;

  andThen(function() {
    modal.on(event, () => { fired = true; });
  });

  return registerWaiter(() => { return fired; });
}

export function waitForModalClose(app, selector) {
  waitForModalEvent(app, selector, 'hidden.bs.modal');
}
