import Ember from 'ember';

export function pastTense([value]) {
  let exceptions = {
    are: 'were',
    eat: 'ate',
    go: 'went',
    have: 'had',
    inherit: 'inherited',
    is: 'was',
    run: 'ran',
    sit: 'sat',
    visit: 'visited'
  };

  if (exceptions[value]) {
    return exceptions[value];
  }
  if ((/e$/i).test(value)) {
    return `${value}d`;
  }
  if ((/[aeiou]c$/i).test(value)) {
    return `${value}ked`;
  }
  // for american english only
  if ((/el$/i).test(value)) {
    return `${value}ed`;
  }
  if ((/[aeio][aeiou][dlmnprst]$/).test(value)) {
    return `${value}ed`;
  }
  if ((/[aeiou][bdglmnprst]$/i).test(value)) {
    return value.replace(/(.+[aeiou])([bdglmnprst])/, '$1$2$2ed');
  }
  return `${value}ed`;
}

export default Ember.Helper.helper(pastTense);
