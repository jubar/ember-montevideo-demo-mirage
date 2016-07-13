export default function(server) {
  server.createList('tag', 10);
  
  let author = server.create('author', {
    firstName: 'Ember',
    lastName: 'Montevideo',
    avatar: 'http://photos3.meetupstatic.com/photos/event/6/a/b/4/global_449907316.jpeg'
  });

  server.createList('post', 5, {
    author,
    tagIds: [1,2,3]
  });

  server.createList('author', 30);

  server.createList('post', 3, {
    authorId: 2
  });

  server.createList('post', 6, {
    authorId: 3
  });


}
