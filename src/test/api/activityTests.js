import expect from 'expect.js';
import Activity from '../../main/api/activity.js';

describe("activity", () =>  {
  describe("#constructor", () => {
    it ("should set values correctly and detect @", () => {
      const activity = new Activity("test@category");

      expect(activity.name).to.equal("test");
      expect(activity.category).to.equal("category");
    });
  });
});
