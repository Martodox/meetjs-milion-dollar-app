import steps from './steps';


export default function(assert) {
  return steps(assert)
    .then(/I see #{(.*?)} button visible on the screen/, function(button, next) {
      assert.equal(find('button').text().trim(), button, `Has ${button} button`);
      next();
    });
}
