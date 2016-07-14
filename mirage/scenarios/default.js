export default function(server) {
  let author = server.create('author', {
    firstName: 'Ember',
    lastName: 'Montevideo',
    avatar: 'http://photos3.meetupstatic.com/photos/event/6/a/b/4/global_449907316.jpeg',
    role: 'Administrator',
    email: 'juliobarmi@gmail.com',
    website: 'http://www.meetup.com/es-ES/ember-montevideo/'
  });

  server.createList('author', 17);

  server.createList('post', 5, { authorId: author.id });

  server.createList('post', 3, {
    authorId: 2
  });

  server.createList('post', 6, {
    authorId: 3
  });

  // server.createList('tag', 10);
  //
  // server.create('postTag', {
  //   tagId: 1,
  //   postId: 1
  // });
  //
  // server.create('postTag', {
  //   tagId: 1,
  //   postId: 6
  // });
}
