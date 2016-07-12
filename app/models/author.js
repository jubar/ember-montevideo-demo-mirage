import Model from 'ember-data/model';

import attr from 'ember-data/attr';

import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  firstName: attr('string'),

  lastName: attr('string'),

  avatar: attr('img'),

  posts: hasMany('post')
});
