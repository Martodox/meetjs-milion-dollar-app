import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()


      .given('I visit $URL page', function(url, next) {
       visit(url);
       assert.ok(true, this.step);
       andThen(() => next());
      })


      .then('I see table with $HEADERS headers', function(headers, next) {
        assert.equal(find('tr').length > 1, true, 'Shows at least one row');
        assert.equal(find('th').length, headers, `Has all ${headers} headers`);
        next();
      });
}
