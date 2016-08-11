import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(id) {
      this.get('store').findRecord('author', id).then((author) => {
        author.destroyRecord();
      });
    },

    detail(id) {
      this.transitionToRoute('paper-author', id);
    }
  }
});
