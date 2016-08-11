import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authors');
  this.route('author', { path: 'authors/:id' });
  this.route('paper-authors');
  this.route('paper-author', { path: 'paper-authors/:id' });
});

export default Router;
