export default function() {
  this.get('authors');

  this.get('authors/:id');

  this.del('authors/:id', ['author', 'post'], { timing: 3000 });

  // this.del('/authors/:id', (schema, request) => {
  //   let { id } = request.params;
  //   let author = schema.authors.find(id);
  //
  //   author.posts.destroy();
  //   author.destroy();
  //   // console.log(schema.posts.all().models.length);
  // });

  this.get('posts');

  this.get('posts/:id');

  this.post('posts');

  this.del('posts/:id');

  this.get('tags');

  this.get('tags/:id');
}
