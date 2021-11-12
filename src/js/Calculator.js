export default class Calculator{
  constructor(humanAge){
    this.humanAge = humanAge;
    this.mercuryAge = this.mercuryAgeCalculate();
    this.venusAge = this.venusAgeCalculate();
    this.marsAge = "";
    this.jupiterAge = "";
  }

  mercuryAgeCalculate() {
    let mercuryAge = Math.round(this.humanAge * .24);
    return mercuryAge;
  }  

  venusAgeCalculate() {
    let venusAge = Math.round(this.humanAge * .62);
    return venusAge;
  }    
}