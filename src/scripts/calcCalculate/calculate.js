class Calc {

  constructor(data) {
    this.calcData = {};
    this.calcWrapper = document.querySelector("#calculator");
    this.firstFindElem = true;
    this.currentElement = {};
    this.navigationSteps = Array.from(document.querySelectorAll(".calc__tabs-block-numeric .calc__tab"));
    this.objSteps = Array.from(document.querySelectorAll(".calc__tabs-content-wrapper .calc__tab-contains"));
    this.currentStep = 0;
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
console.log("1112222");

    if (this.checkOfVoidParam(this.calcWrapper)) {
      this.calcWrapper.addEventListener("click", (e) => {
        let target = e.target;
console.log("111");
        if (target.hasAttribute("data-handler-name")) {
console.log("222");

          if (this.checkOfVoidFunc(target.getAttribute("data-handler-name"))) {
            console.log(333);

            let handlerFunc = this[target.getAttribute("data-handler-name")].bind(this);
            target.addEventListener(target.getAttribute("data-type-func"), (e) => {

console.log("444");

              //e.stopPropagation();
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
  /* рекурсивно обходим объект */
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

  createElementData(nameobj, params, value = null) {
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

  handlerRoomsAreaFunc(e) {
    let target = e.target;
    let nameObj = this.transliter(target.dataset.title);
    console.log(nameObj);
    console.log(this.calcData);

    this.calcData.dataRooms[nameObj] = {};

    let long = target.querySelector(".calc__card-list-long .calc__card-list-input");
    if (!!long) {
      this.calcData.dataRooms[nameObj].long = long.value;
    }

    let width = target.querySelector(".calc__card-list-width .calc__card-list-input");
    if (!!width) {
      this.calcData.dataRooms[nameObj].width = width.value;
    }

    let area = target.querySelector(".calc__card-list-area .calc__card-list-input");
    if (!!area) {
      this.calcData.dataRooms[nameObj].area = area.value;
    }

  }

  computeActiveStep() {
    this.navigationSteps.forEach(item => {
      if (item.classList.contains("calc__tab_active")) {
        this.currentStep = item.dataset.tabNum;
      }
    })
  }

  setStep() {
    for (let i = 0; i < this.navigationSteps.length; i++) {
      this.navigationSteps[i].classList.remove("calc__tab_active");
      this.objSteps[i].classList.remove("calc__tab-contains_active");
    }
    this.navigationSteps[this.currentStep].classList.add("calc__tab_active");
    this.objSteps[this.currentStep].classList.add("calc__tab-contains_active");
  }

  nextStep() {
    console.log("было = " + this.currentStep)
    this.currentStep++;
    console.log("Стало = " + this.currentStep)

    this.setStep();
  }

  backStep() {
    console.log("было = " + this.currentStep)
    this.currentStep--;
    console.log("Стало = " + this.currentStep)

    this.setStep();
  }

  handlerMultiChek(e){
    let target = e.target;
    let title = target.innerHTML
    let name = this.transliter(title);
    let nextElement = target.nextElementSibling;
    let elementsCheck = Array.from(nextElement.querySelectorAll(".calc__checkbox"));

    let params = {};
    let massCheck = [];

    elementsCheck.forEach((item, index) => {
      if (item.checked) {
        massCheck[index] = {
          title : item.nextElementSibling.innerText,
          price : item.dataset.price
        }
      }
    })
    params.title = title;
    params.elementsList = massCheck;
    this.createElementData(name, params);
  }



  transliter(w) {
    let answer = '';
    let converter = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
      'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
      'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
      'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
      'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
      'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
      'э': 'e',    'ю': 'yu',   'я': 'ya',   ' ': ''
    };
    let word = w.toLowerCase();
    for (var i = 0; i < word.length; ++i ) {
      if (converter[word[i]] == undefined){
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }   
    return answer;
  }
}

export default Calc;