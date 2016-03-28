$(function() {

var suits = ["clubs", "hearts", "spades", "diamonds"]
var numbers = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]


    suits.forEach(function(suit) {
    numbers.forEach(function(number) {
      $(".output").append("<li>" + number + " of " + suit + "</li>")
    });
  });
});
