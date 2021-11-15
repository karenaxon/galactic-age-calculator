import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/Calculator.js';

$("input").on('click', function(){
  $("#invalid-input").hide();
  $("#output").hide();
});

$("form").on("submit", function(event){
  event.preventDefault();
  let ageInput = parseInt($("#age-input").val());
  let expectancyAge = parseInt($("#expectancy-input").val());

  if(Number.isNaN(ageInput)) {
    $("#invalid-input").text("Invalid input. Please try again!");
    $("form").trigger("reset");
  }

  let ages1 = new Calculator(ageInput, expectancyAge);
  const {humanAge, humanYearsLeft, mercuryAge, mercuryYearsLeft, venusAge, venusYearsLeft, marsAge, marsYearsLeft, jupiterAge, jupiterYearsLeft} = ages1;

  $("#output").html(`<div class="row text-center">
  <div class="col-4"<p><strong>Planet</strong></p></div>
  <div class="col-4"<p><strong>Age</strong></p></div>
  <div class="col-4"<p><strong>Years Left</strong></p></div>
  </div>
  <div class="row text-center">
  <div class="col-4"<p class="h2">Earth</p></div>
  <div class="col-4"<p class="h2">${humanAge}</p></div>
  <div class="col-4"<p class="h2">${humanYearsLeft}</p></div>
  </div>
  <div class="row text-center">
  <div class="col-4"<p class="h2">Mercury</p></div>
  <div class="col-4"<p class="h2">${mercuryAge}</p></div>
  <div class="col-4"<p class="h2">${mercuryYearsLeft}</p></div>
  </div>
  <div class="row text-center">
  <div class="col-4"<p class="h2">Venus</p></div>
  <div class="col-4"<p class="h2">${venusAge}</p></div>
  <div class="col-4"<p class="h2">${venusYearsLeft}</p></div>
  </div>
  <div class="row text-center">
  <div class="col-4"<p class="h2">Mars</p></div>
  <div class="col-4"<p class="h2">${marsAge}</p></div>
  <div class="col-4"<p class="h2">${marsYearsLeft}</p></div>
  </div>
  <div class="row text-center">
  <div class="col-4"<p class="h2">Jupiter</p></div>
  <div class="col-4"<p class="h2">${jupiterAge}</p></div>
  <div class="col-4"<p class="h2">${jupiterYearsLeft}</p></div>
  </div>`).show();
});