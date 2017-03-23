import Ember from 'ember';

export default Ember.Route.extend({
  model({ order_id }) {
    return Ember.$.get(`/orders/${order_id}`);
  }
});
