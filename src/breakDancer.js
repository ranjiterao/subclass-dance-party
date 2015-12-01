var breakDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //calling makeDancer to create a new instance of makeDancer
    //this new instance has all of makeDancer's properties and method delegation
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("breaking");

};

//set makeBlinkydancer.prototype's failed lookup to makeDancer.prototype
breakDancer.prototype = Object.create(makeDancer.prototype);

breakDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideToggle("slow");
};
