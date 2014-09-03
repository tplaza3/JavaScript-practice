//take last entry create a new var
var values = ["Jason", 4, true];
var bool = values.pop();

// Now alert to the screen the entire first movie in eightiesMovies, but only using the eightiesMovies variable. For now, use the concatenation operator to unite the words into one string. Remember to be attentive to necessary whitespace…

var movie1 = [ 16, "Candles"];
var movie2 = [ 3, "Men", "and", "a", "Baby"];
var eightiesMovies = [ movie1, movie2];

alert(eightiesMovies[0][0] + " " + eightiesMovies[0][1]);

//Build out the numStrings function below, using a loop that counts all of the strings in the array parameter called list. Remember to return the amount of strings found before the function exits.

function numStrings(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++){
    if( typeof list[i] == "string" ){
      count++;
    }
  }
  return count;
}