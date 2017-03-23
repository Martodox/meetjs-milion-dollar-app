import Ember from 'ember';

export default Ember.Controller.extend({
  headers: Ember.computed('model', function () {
    return Object.keys(this.get('model.manifest')[0]);
  }),
});
