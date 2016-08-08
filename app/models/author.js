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

  bio: attr('string'),

  email: attr('string'),

  website: attr('string'),

  role: attr('string'),

  posts: hasMany('post'),

  shortBio: computed('bio', {
    get() {
      let bio = this.get('bio');

      if (bio.length < 50) {
        return bio;
      }

      return `${bio.substring(0, 50)}...`;
    }
  })
});
