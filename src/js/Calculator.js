export default class Calculator{
  constructor(humanAge){
    this.humanAge = humanAge;
    this.mercuryAge = this.mercuryAgeCalculate();
    this.venusAge = "";
    this.marsAge = "";
    this.jupiterAge = "";
  }

  mercuryAgeCalculate() {
    let mercuryAge = this.humanAge *.24;
    console.log(this.mercuryAge);
    return mercuryAge;
  }  
}