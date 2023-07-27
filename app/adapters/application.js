import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL() {
    const url = super.buildURL(...arguments);
    return `${url}.json`;
  }

  deleteRecord() {
    return Promise.resolve();
  }
}
