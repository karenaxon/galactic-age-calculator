import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/Calculator.js';

$("form").on("submit", function(event){
  event.preventDefault();
  let ageInput = parseInt($("#age-input").val());
  let expectancyAge = parseInt($("#expectancy-input").val());
  $("form").trigger("reset");

  if(Number.isNaN(ageInput)) {
    $("#invalid-input").text("Invalid input. Please try again!");
    $("form").trigger("reset");
  };

  let ages1 = new Calculator(ageInput, expectancyAge);
  $("#output").text(ages1.humanYearsLeft).show();

  let ages = new Map(
    [
      ["Human", ["Age", ages1.humanAge], ["Life Expectancy ", ages1.humanYearsLeft]],
      ["Mercury", ["Age", ages1.mercuryAge], ["Life Expectancy ", ages1.mercuryYearsLeft]],
      ["Venus", ["Age", ages1.venusAge], ["Life Expectancy ", ages1.venusYearsLeft]],
      ["Mars", ["Age", ages1.marsAge], ["Life Expectancy ", ages1.marsYearsLeft]],
      ["Jupiter", ["Age", ages1.jupiterAge], ["Life Expectancy ", ages1.jupiterYearsLeft]],
    ]
  );

  ages.forEach((key, value) => {
    let string = "";
    $("#output").html(`${key} ${value}`).show();
  });

});