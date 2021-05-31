class Calc {

  constructor(data) {
    this.calcData = {
      name: "qqq",
      obj: {
        name: "www",
        param: 1111,
        obj2: {
          qqq: "ssss"
        }
      }
    };
    this.calcWrapper = data.wrapper;
  }

  init() {
   // console.log(this.calcData);
   // console.log(this.calcWrapper);

  }

  getData() {
    return this.calcData;
  }

  createDataGroup(name) {
    return;
  }

  findFieldInCalc(name, obj = this.getData()) {
    for (let key in obj) {
      console.log(typeof obj[key]);
      let value = obj[key];

      if (value == name) {
        return true;
      }
      if ((typeof value) == "object") {

        this.findFieldInCalc(name, value);
      }
    }
    return false;
  }

}

export default Calc;