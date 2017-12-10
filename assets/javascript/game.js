
// var win=0;
// var losses=0;
// var crystal_1;
// var crystal_2;
// var crystal_3;
// var crystal_4;
// eveytime the game restarts thre is a random number generated

// this is my on click for the game to start and to genrate a random number//
// Here we created an on-click event that responds to button clicks of the crystal image.
var random_Comp_Number=50 // Computers guess - need a for loop to crate a random number everytime the game restarts
$("#computer_guess").text(random_Comp_Number);

var Crystal_Value =0; // this is an actual counter
// my counter is starting at zero

var Crystal_number_option =[1,2,3,4,5,6,7,8,9,10,11,12];
var  random_crystal_value =Crystal_number_option[Math.round(Math.random())];


$("#crystal_1").on("click", function() {
  Crystal_Value+=random_crystal_value; // This will generate a random number everytime the crystal is clicke
  // Clicking the button triggers an alert message.
  alert("Your new score is: " + Crystal_Value); // this needs to show at the bottom for what you have so far at the bottom
// you can maybe crate a for loop for this to keep adding the number
  if(Crystal_Value===random_Comp_Number){
    alert("you win");
  } // and as we update win variable by+1
  else if(Crystal_Value >=random_Comp_Number){
    alert(" you lose!")
  } // update the loses variable by +1

});




// this sumber needs to be generated between 19 - 100

// there are four crystals. when clicked they generate random numbers

// there should be a variable that holds the number that are clicked on at the botom.
// there should be a varible that holds the random number at the top.

// these two should be disllaied to the html later on//

// these two need to be compared and I need to crate a if / else to display and updated ein and lose //
// if you go over the computer guess the game is over - restart
// this will contain everything in my Js
