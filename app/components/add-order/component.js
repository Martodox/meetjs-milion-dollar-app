import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    this.set('newOrder', {});
  },
  willDestroy() {
    this._super(...arguments);

    this.set('newOrder', null);
  },
  actions: {
    newOrder() {
      this.sendAction('saveOrder', this.get('newOrder'));
    }
  }
});
