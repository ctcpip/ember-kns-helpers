import Ember from 'ember';

export function tableCellClass([classNames, sort]) {
  let classes = Ember.A();

  if (Ember.isPresent(classNames)) {
    classes.pushObjects(classNames);
  }

  if (Ember.isPresent(sort)) {
    classes.pushObject(sort);
  }

  return classes.join(' ');
}

export default Ember.Helper.helper(tableCellClass);
