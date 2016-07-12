import Ember from 'ember';

import Model from 'ember-data/model';

import attr from 'ember-data/attr';

import { hasMany } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  firstName: attr('string'),

  lastName: attr('string'),

  fullName: computed('firstName', 'lastName', {
    get() {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    }
  }),

  avatar: attr('string'),

  posts: hasMany('post')
});
