import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  leftSideBarOpen: false,

  actions: {
    toggleSideNav() {
      this.toggleProperty('leftSideBarOpen');
    }
  }
});
