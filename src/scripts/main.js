import Service from './serviceModules/serviceModules';
import Calc from './calcCalculate/calculate';

document.addEventListener("DOMContentLoaded", () => {

  const service = new Service();
  service.init();

  const calc = new Calc({
    wrapper: document.querySelector("#calculator")
  });
  calc.init();
  console.log(calc.findFieldInCalc(1111));
});