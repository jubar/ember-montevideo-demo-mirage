import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  post: belongsTo(),

  tag: belongsTo()
});
