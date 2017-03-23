import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  orders: service(),
  model() {
    return this.get('orders').getOrders();
  }
});
