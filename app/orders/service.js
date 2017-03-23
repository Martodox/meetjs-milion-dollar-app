import Ember from 'ember';

export default Ember.Service.extend({
  getOrders() {
    return Ember.$.get('/orders');
  },
  addOrder(order) {
    return Ember.$.post('/orders', {
      customer: order.customer,
      net_value: order.netValue,
      description: order.description
    });
  }
});
