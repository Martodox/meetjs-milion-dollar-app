import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-order', 'Integration | Component | add order', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{add-order}}`);

  const labels = this.$('label').map((i, val) => val.innerText);

  const cleanArray = [];

  for(let i = 0; i < labels.length; i++) {
    cleanArray.push(labels[i]);
  }

  assert.deepEqual(cleanArray, ["Customer","Value","Description"], 'Displays correct labels');

});
