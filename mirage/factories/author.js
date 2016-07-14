import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },

  familyName() {
    return faker.name.lastName();
  },

  avatar() {
    return faker.image.avatar();
  },

  bio() {
    return faker.lorem.paragraph();
  },

  email() {
    return faker.internet.email();
  },

  website() {
    return faker.internet.url();
  },

  role() {
    return faker.random.arrayElement([
      'Administrator',
      'Writer',
      'Reader'
    ]);
  },

  afterCreate(author, server) {
    let { firstName, familyName } = author;
    if (firstName === 'Ember' && familyName === 'Montevideo') {
      server.create('post', {
        title: 'Created in the factory',
        content: 'This very short post was created in the author\'s factory.',
        authorId: author.id
      });
    }
  }

});
