var expect = chai.expect;

describe("main", function() {
  describe("constructor", function(stat) {
    it("AppView should be called", function() {
      var app = new Todo.AppView();
      expect (app.stat).to.equal(true);
    });
  });
});