import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['data.urgent:warning'],
  doubleClick() {
    this.sendAction('goToOrder', this.get('data.id'));
  }
});
