import Ember from 'ember';

export function titleize([params]) {
  return params.replace(/_/g, ' ').replace(/\w*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default Ember.Helper.helper(titleize);
