import steps from './steps';

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function(assert) {
  return steps(assert)
    .then('I see id $ID displayed in the top section', function(id, next) {
      assert.equal(find('h2').text().trim(), `Order no: ${id}`, "Shows correct ID");
      next();
    });
}
