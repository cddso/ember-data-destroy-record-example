import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { TrackedArray } from 'tracked-built-ins';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    // just to load the data
    await this.store.findAll('user');
    // Working on a not live array
    return new TrackedArray(this.store.peekAll('address').slice());
  }
}
