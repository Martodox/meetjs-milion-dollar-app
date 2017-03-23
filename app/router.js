import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orders', {path: '/'});
  this.route('single-order', {path: '/order/:order_id'});
});

export default Router;
