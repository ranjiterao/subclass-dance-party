/*

SETTING

  Bhangra Party
    1. Choose a background
      Indian party background or club - find an image/set as background
    2. Add some pictures 

CHARACTERS

  Super Class - Hat (image of a hat)

    Sub Class 1 - Carleton
      For our sub class function, we want to keep 
      the makeDancer function's node and add on new html/css


    Sub Class 2 - Some Girl
      For our sub class function, we want to keep the 
      makeDancer function's node and add on new html/css

  1. Guys

  2. Girls
  3. Celebrities

1. Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in src/init.js) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.

Create results array
Store storedLeft value dancer[0].left
Store storedTop value dancer[0].top
Iterate thru dancer, index 1 through last (not including first [0])
  Execute distance formula 
    d = sqrt((dancer[i].top - storedTop)^2 + (dancer[i].left - storedLeft)^2 )
  Store result in d
    If d <= fixed value then push dancer[i] to results array
Iterate thru results array
  Apply jQuery fn to each object's node
  results[x].$node.toggle/rotate/something


*/
