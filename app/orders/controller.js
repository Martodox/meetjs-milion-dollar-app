import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  orders: service(),
  addNew: false,
  headers: Ember.computed('model', function () {
    return Object.keys(this.get('model')[0]);
  }),
  actions: {
    goToOrder(orderId) {
      this.transitionToRoute('single-order', orderId);
    },
    toggleForm() {
      this.toggleProperty('addNew');
    },
    saveOrder(newOrder) {
      this.get('orders').addOrder(newOrder).then(response => {

        this.get('model').pushObject(response);

        this.toggleProperty('addNew');

      });
    }

  }
});
