import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({

  model() {
    return RSVP.hash({
      authors: this.get('store').findAll('author') // ,
      // post: this.get('store').findAll('post')
    });
  }
});
