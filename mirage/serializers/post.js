import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['posts', 'tags'],

  keyForAttribute(key) {
    if (key === 'authorId') {
      return 'author';
    } else {
      return key;
    }
  }
});
