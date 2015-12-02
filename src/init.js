$(document).ready(function() {
  window.dancers = [];
  var audio = new Audio("src/song.mp3");
  audio.play();

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    console.log(dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

$(".testDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data("testing");



    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunction);

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer);
    $('body').append(dancer.$node);
    dancers.push(dancer);

  });

$(".breakDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     
    var dancerMakerFunctionName = $(this).data("breakdancing");


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer);
    $('body').append(dancer.$node);
    dancers.push(dancer);

  });

$(".linetest").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    
    var lineThem = function(left) {
        for (var i = 0; i<dancers.length; i++) {
            dancers[i].lineUp(left);
            left+=100;
        }
    }

    lineThem(0);
     
    // }
    // var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // console.log(dancerMakerFunctionName);

    // // get the maker function for the kind of dancer we're supposed to make
    // var dancerMakerFunction = window[dancerMakerFunctionName];
    // // make a dancer with a random position

    // var dancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );
    // $('body').append(dancer.$node);
    // dancers.push(dancer);
  });

$(".closeRotate").on("mouseover", function(event) {

  var dosieDough = function() {
    var results = [];
    var storedLeft = dancers[0].left;
    var storedTop = dancers[0].top;
    var d;
    for (var i = 1; i<dancers.length; i++) {
      d = Math.sqrt((dancers[i].top - storedTop)*(dancers[i].top - storedTop) + (dancers[i].left - storedLeft)*(dancers[i].left - storedLeft));
      if (d <= 200) {
        results.push(dancers[i]);        
      }
    }
    console.log(results);
    for (var x = 0; x<results.length; x++) {
      results[x].$node.toggle();
    }
    dancers[0].$node.toggle();
  }

  dosieDough();

  });
});





