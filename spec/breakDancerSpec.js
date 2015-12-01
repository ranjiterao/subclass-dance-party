
describe("breakDancer", function() {

  var breakDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new makeBreakDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node slide toggle", function() {
    sinon.spy(breakDancer.$node, 'slideToggle');
    breakDancer.step();
    expect(breakDancer.$node.slideToggle.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(breakDancer, "step");
      expect(breakDancer.step.callCount).to.be.equal(0);
      //blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(breakDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(breakDancer.step.callCount).to.be.equal(2);
    });
  });
});