import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['posts'],

  keyForAttribute(key) {
    if (key === 'authorId') {
      return 'author';
    } else {
      return key;
    }
  }
});
