import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let author = this.modelFor('author');

    return author.get('posts');
  }
});
