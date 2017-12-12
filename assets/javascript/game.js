var random_Comp_Number = Math.floor(Math.random() * 120) + 13;
console.log(random_Comp_Number);
// Computers guess - need a for loop to crate a random number everytime the game restarts
$("#computer_guess").text(random_Comp_Number);

var current_guess_sum = 0; // This is gone be displayed at the bottom..Sum of current guess
var win = 0;

var loses = 0;

var random_crystal_value = Math.floor(Math.random() * 12) + 1;
//===============================================================//
///crate a custom attr to hold a value for each Crystal//

$("#crystal_1").attr("data-crystal_Value", Math.floor(Math.random() * 12) + 1);

$("#crystal_2").attr("data-crystal_Value", Math.floor(Math.random() * 12) + 1);

$("#crystal_3").attr("data-crystal_Value", Math.floor(Math.random() * 12) + 1);

$("#crystal_4").attr("data-crystal_Value", Math.floor(Math.random() * 12) + 1);
//
// $(".crystal").each(function(){
//   console.log($(this).attr("data-crystal_Value"));
// });

//=========================================================//
// Here we created an on-click event that responds to button clicks of the crystal image.

$(".crystal").on("click", function() {

  // this needs to show at the bottom for what you have so far at the bottom
  var current_signle_guess = ($(this).attr("data-crystal_Value"));
  // this will update the sum at the bottom - it will add on to what ever image is clicked plus next click
  current_signle_guess = parseInt(current_signle_guess); // here i am changing the single guess to Intg.

  current_guess_sum = current_guess_sum + current_signle_guess;
  $(".Current_guess").text(current_guess_sum);

  // ========================================================//

  if (current_guess_sum === random_Comp_Number) {
    win = win + 1;
    $("#win").text(win);
    current_guess_sum = 0; // resetting my sum

  } // and as we update win variable by+1
  else if (current_guess_sum >= random_Comp_Number) {
    loses = loses + 1;
    current_guess_sum = 0;

    // resetting game at 0 for Losses
    if (loses > 2) {
      loses = 0;
      win = 0;
    }
    // display Losses
    $("#loses").text(loses);
    $("#win").text(win);
  } // update the loses variable by +1

});
