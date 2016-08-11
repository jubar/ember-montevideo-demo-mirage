import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    let { id } = params;
    return this.get('store').findRecord('author', id);
  }
});
