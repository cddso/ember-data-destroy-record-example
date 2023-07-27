import Model, { attr, belongsTo } from '@ember-data/model';

export default class AddressModel extends Model {
  @attr name;

  @belongsTo('user', { async: false, inverse: 'address' }) user;
}
