import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/Calculator.js';

// $("input").on("keyup", function(){
//   if (keyup == 13) {
//     $("form").on("click");
//   }
// });

// $("input").on(click, function(){
//   $("form").trigger("reset");
//   // $("#invalid-input").hide();
// });

$("form").on("submit", function(event){
  event.preventDefault();
  let ageInput = parseInt($("#age-input").val());
  let expectancyAge = parseInt($("#expectancy-input").val());

  if(Number.isNaN(ageInput)) {
    $("#invalid-input").text("Invalid input. Please try again!");
    $("form").trigger("reset");
  };

});