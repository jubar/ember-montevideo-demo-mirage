import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    create() {
      //debugger;
      let author = this.get('store').peekRecord('author', this.get('model.id'));
      let title = this.get('postTitle');
      let content = this.get('postContent');

      let record = this.get('store').createRecord('post', {
        author,
        title,
        content
      });

      record.save();

      this.setProperties({
        postTitle: '',
        postContent: ''
      });
    }
  }
});
