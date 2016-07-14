import BaseSerializer from './application';
const { dasherize } = Ember.String;

export default BaseSerializer.extend({
  include: ['posts'],

  // embed: true

  keyForAttribute(attr) {
    if (attr === 'familyName') {
      return dasherize('lastName');
    } else {
      return dasherize(attr);
    }
  }
});
