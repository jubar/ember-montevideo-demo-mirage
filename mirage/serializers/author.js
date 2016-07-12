import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['posts'],

  keyForRelationshipIds(relationship) {
    if (relationship === 'post') {
      return 'posts';
    } else {
      return relationship;
    }
  }
});
