export default function(server) {
  let author = server.create('author', {
    firstName: 'Julio',
    lastName: 'Barrios'
  });

  server.createList('post', 5, { author });
}
