export default function(server) {
  let author = server.create('author', {
    firstName: 'Julio',
    lastName: 'Barrios'
  });

  server.createList('post', 5, { author });

  server.createList('author', 5);

  server.createList('post', 3, {
    authorId: 2
  });

  server.createList('post', 6, {
    authorId: 3
  });
}
