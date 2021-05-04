import Model, { attr } from '@ember-data/model';

export default class gifModel extends Model {
  @attr title;
  @attr images;
  @attr user;
  @attr url;
}