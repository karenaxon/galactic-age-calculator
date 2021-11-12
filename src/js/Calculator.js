export default class Calculator{
  constructor(humanAge){
    this.humanAge = humanAge;
    this.mercuryAge = this.mercuryAgeCalculate();
    this.venusAge = this.venusAgeCalculate();
    this.marsAge = this.marsAgeCalculate();
    this.jupiterAge = this.jupiterAgeCalculate();
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
}