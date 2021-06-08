class Calc {

  constructor(data) {
    this.calcData = {};
    this.calcWrapper = document.querySelector("#calculator");
    this.firstFindElem = true;
    this.currentElement = {};
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
            let handlerFunc = this[target.getAttribute("data-handler-name")].bind(this);
            target.addEventListener(target.getAttribute("data-type-func"), (e) => {
              e.stopPropagation();
              handlerFunc(e);
              console.log(this.getData());
            })
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
  findFieldInCalc2(findValue, obj = this.getData()) {
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

  findFieldInCalc(findValue, obj = this.getData()) {
    let checkFind = false;
    for (let key in obj) {

      let value = obj[key];
      checkFind = value === findValue;

      if (!checkFind && typeof value === "object") {
        checkFind = this.findFieldInCalc(findValue, value);
      }
      if (checkFind && this.firstFindElem) {
        this.firstFindElem = !this.firstFindElem;
        /* тут должна запускаться функция обработчик которая заменит данные */
        return true;
      }
      if (checkFind) {
        return true;
      }
    }
    return false;
  }

  createElementData(nameobj, params, value) {
    let nameElement = nameobj;
    this.calcData[nameElement] = {};
    for (let key in params) {
      this.calcData[nameElement][key] = params[key];
    }
    this.calcData[nameElement].value = value;
    return this.calcData[nameElement];
  }

  handlerInputObjectSingle(e) {
    let target = e.target;
    this.createElementData(target.getAttribute("data-name"), target.dataset, target.value);
  }
  handlerChekedObjectSingle(e) {
    let target = e.target;
    this.createElementData(target.getAttribute("data-name"), target.dataset, target.checked);
  }
  hadlerCreateRadioObj(e) {
    let target = e.target;
    this.createElementData(target.getAttribute("data-name"), target.dataset, null);
  }
}

export default Calc;