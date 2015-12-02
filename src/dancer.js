// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.leftEdge = true;
  this.rightEdge = false;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="http://content.screencast.com/users/fg-a/folders/world-flags/media/72ef25eb-15be-46fd-b2d5-96196509b6de/indiaC.gif" width="150"></span>');

  this.step();

};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  if (this.leftEdge === true) {
    this.left = this.left + 100;
    this.setPosition(this.top, this.left)
  }
  if (this.left <=100 && this.leftEdge === false) {
    this.leftEdge = true;
    this.rightEdge = false;
  } 
  if (this.left >=1800 && this.rightEdge === false) {
    this.rightEdge = true;
    this.leftEdge = false;
  }
  if (this.rightEdge === true) {
    this.left = this.left - 100;
    this.setPosition(this.top, this.left);
  }

  
  setTimeout(function() { that.step(); }, this.timeBetweenSteps);
};


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(left) {
  var that = this;

  that.setPosition(200, left);
  that.left = left;
  that.top = 200;
}

