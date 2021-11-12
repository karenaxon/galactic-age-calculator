export default class Calculator{
  constructor(humanAge, humanLifeExpectancy){
    this.humanAge = humanAge;
    this.humanLifeExpectancy = humanLifeExpectancy;
    this.humanYearsLeft = this.humanYearsLeftCalculate();

    this.mercuryAge = this.mercuryAgeCalculate();
    this.mercuryYearsLeft = this.mercuryYearsLeftCalculate();

    this.venusAge = this.venusAgeCalculate();
    this.venusYearsLeft = this.venusYearsLeftCalculate();

    this.marsAge = this.marsAgeCalculate();
    this.marsYearsLeft = this.marsYearsLeftCalculate();

    this.jupiterAge = this.jupiterAgeCalculate();
    this.jupiterYearsLeft = this.jupiterYearsLeftCalculate();
  }

  mercuryAgeCalculate() {
    let mercuryAge = Math.round(this.humanAge * .24);
    return mercuryAge;
  }  

  venusAgeCalculate() {
    let venusAge = Math.round(this.humanAge * .62);
    return venusAge;
  }  
    
  marsAgeCalculate() {
    let marsAge = Math.round(this.humanAge * 1.88);
    return marsAge;
  }  

  jupiterAgeCalculate() {
    let jupiterAge = Math.round(this.humanAge * 11.86);
    return jupiterAge;
  } 

  humanYearsLeftCalculate() {
    let humanYearsLeft = Math.round(this.humanLifeExpectancy) - this.humanAge;
    return humanYearsLeft;
  }
  
  mercuryYearsLeftCalculate() {
    let mercuryYearsLeft = Math.round(this.humanLifeExpectancy * 3) - this.mercuryAge;
    return mercuryYearsLeft;
  }

  venusYearsLeftCalculate() {
    let venusYearsLeft = Math.round(this.humanLifeExpectancy / 3.2) - this.venusAge;
    return venusYearsLeft;
  }

  marsYearsLeftCalculate() {
    let marsYearsLeft = Math.round(this.humanLifeExpectancy * 100) - this.marsAge;
    return marsYearsLeft;
  }

  jupiterYearsLeftCalculate() {
    let jupiterYearsLeft = Math.round((this.humanLifeExpectancy % 3) * 10000) - this.jupiterAge;
    return jupiterYearsLeft;
  }

}