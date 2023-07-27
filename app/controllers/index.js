import Controller from '@ember/controller';

export default class IndexController extends Controller {
  formatUserName(address) {
    return address.user.name;
  }

  removeAddress = async (record) => {
    record.deleteRecord();
    await record.save();
    record.unloadRecord();

    // Using destroyRecord here doesn't work as expected.
    // await record.destroyRecord();

    // manual removal
    this.model.splice(this.model.indexOf(record), 1);
  };
}
