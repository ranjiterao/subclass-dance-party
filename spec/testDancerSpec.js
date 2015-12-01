describe("testdancer", function() {

  var testDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    testDancer = new makeNewDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(testDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fade in", function() {
    sinon.spy(testDancer.$node, 'fadeIn');
    testDancer.step();
    expect(testDancer.$node.fadeIn.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(testDancer, "step");
      expect(testDancer.step.callCount).to.be.equal(0);
      //testDancer = new maketestDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(testDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(testDancer.step.callCount).to.be.equal(2);
    });
  });
});