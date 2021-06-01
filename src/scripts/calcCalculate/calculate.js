class Calc {

  constructor(data) {
    this.calcData = {
      name: "qqq",
      obj: {
        name: "www",
        param: 1111,
        obj2: {
          qqq: "ssss"
        },
        obj3: {
          q1: "q1",
          q2: "q2"
        }
      },
      ew: 111
    };
    this.calcWrapper = document.querySelector("#calculator");
  }

  init() {
    this.handlingCalcWrapper();
    // console.log(this.calcData);
    // console.log(this.calcWrapper);

  }

  getData() {
    return this.calcData;
  }

  /*Проверяем наличие атрибута в котором храниться 
  название функции обработчика данного поля если поле есть 
  и функция с таким названием существет, то запускам её*/
  handlingCalcWrapper() {
    if (this.checkOfVoidParam(this.calcWrapper)) {
      this.calcWrapper.addEventListener("click", (e) => {
        let target = e.target;

        if (target.hasAttribute("data-handler-name")) {
          if (this.checkOfVoidFunc(target.getAttribute("data-handler-name"))) {
            let handlerFunc = this[target.getAttribute("data-handler-name")];
            handlerFunc();
          }
        }

      })
    }
  }

  createDataGroup(name) {
    return;
  }
/*проверяем существует ли функция в классе */
  checkOfVoidFunc(funcName) {
    if (typeof this[funcName] == "function") {
      return true;
    } else {
      return false;
    }
  }
/*проверяем существует ли переменная */
  checkOfVoidParam(paramName) {
    if (paramName) {
      return true;
    } else {
      return false;
    }
  }
/* рекурсивно обходим обхект */
  findFieldInCalc(findValue, obj = this.getData()) {
    for (let key in obj) {
      let value = obj[key];
      //     console.log(value);
      //     console.log(key);
      if (value === findValue) {
        return true;
      } else if ((typeof value) == "object") {
        return this.findFieldInCalc(findValue, value);
      }
    }
    return false;
  }

  createElementData(params) {
    let element = {};

    if (params.type) {

    }


    return element;
  }

  handlerNameObject() {
    alert("aaa");
  }
}

export default Calc;