var makeBreakDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //calling makeDancer to create a new instance of makeDancer
    //this new instance has all of makeDancer's properties and method delegation
  makeDancer.call(this, top, left, timeBetweenSteps);
  var newGif = $('<span class="dancer"><img src="http://gifdanceparty.giphy.com/dancers_thumbs/8bitcarlton.png" width="100"></span>');
  this.$node = $('<span class="dancer"><img src="http://res.freestockphotos.biz/pictures/15/15581-illustration-of-a-blue-cartoon-hat-pv.png" width="100"></span><div class="dancer"><br><br><br><img src="http://gifdanceparty.giphy.com/dancers_thumbs/8bitcarlton.png" width="100"></div>');
  
  //this.$node = $('<span class="dancer"><img src="http://gifdanceparty.giphy.com/dancers_thumbs/8bitcarlton.png" width="100"></span>');
  this.setPosition(top, left);
};

//set makeBlinkydancer.prototype's failed lookup to makeDancer.prototype
makeBreakDancer.prototype = Object.create(makeDancer.prototype);

makeBreakDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideToggle("slow");
};
