import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    delete(id) {
      this.get('store').findRecord('author', id).then((author) => {
        author.destroyRecord();
      });
    }
  }
});
