import { test } from 'qunit';
import moduleForAcceptance
from 'ember-montevideo-demo-mirage/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors');

test('visiting /authors', function(assert) {
  let author = server.create('author', {
    firstName: 'Julio',
    familyName: 'Barrios'
  });
  server.createList('author', 5);
  server.create('post', {
    authorId: author.id,
    title: 'Simple test'
  });

  visit('/authors');

  andThen(function() {
    assert.equal(find('.authors-list li').size(), 6);
    assert.equal(find('.title:first').text(), 'Julio Barrios');
    assert.equal(find('.post-count:first').text(), '1');

  });

  visit('/authors/1');

  andThen(function() {
    assert.equal(find('ul#posts li').size(), 1, 'Post found.');
    assert.equal(find('ul#posts li:first h4').text(), 'Simple test', 'Post title found.');
  });
});
