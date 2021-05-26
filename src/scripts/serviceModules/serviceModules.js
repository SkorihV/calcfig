const service = {
  currenChangeInput: function (mass) {
    mass.forEach(item => {
      let boxInputValue = Number(item.querySelector(".calc__card-list-current-imput").value);
      if (!boxInputValue) {
        item.classList.add("calc__card-list-current-num-box_disabled");
      }
      item.addEventListener("click", (e) => {
        const target = e.target;
        const inputCurrent = item.querySelector(".calc__card-list-current-imput");
        let valueInput = parseInt(inputCurrent.value);
        if (target.classList.contains("calc__button-plus")) {

          if (isNaN(valueInput)) {
            inputCurrent.value = 0;
            item.classList.add("calc__card-list-current-num-box_disabled");
            return;
          }
          inputCurrent.value = valueInput + 1;
          item.classList.remove("calc__card-list-current-num-box_disabled");
        }

        if (target.classList.contains("calc__button-minus")) {
          if (isNaN(valueInput)) {
            inputCurrent.value = 0;
            return;
          }
          valueInput--;
          if (valueInput <= 0) {
            valueInput = 0;
            item.classList.add("calc__card-list-current-num-box_disabled");
          }
          inputCurrent.value = valueInput;
        }
      });
    });
  },
  openMultilist: (e) => {

    let className = e.target.classList[0]
    e.target.classList.toggle(className + "_open");
  },
  openMultilistHandler: (classNameHandler, classNameSave) => {
    let findElementClassName = document.querySelectorAll("." + classNameHandler);
    if (!findElementClassName) {
      return;
    }
    console.log(findElementClassName);
    document.body.addEventListener("click", (e) => {
      findElementClassName.forEach(item => {
        if (!e.target.classList.contains(classNameSave)) {
          item.classList.remove(classNameHandler + "_open");

        }
      })

      if (e.target.classList.contains(classNameHandler)) {
        console.log(e.target.classList);
        e.target.classList.add(classNameHandler + "_open");
      }
    })
  },
  changeinputCardListPlaceholder: (e) => {
    if (e.target.value.length > 0) {
      e.target.classList.add("calc__card-list-input_active");
    }
    if (e.target.value.length <= 0) {
      e.target.classList.remove("calc__card-list-input_active");
    };
  },
  tabElementActivation: (wrapperNavigation, tabsElements) => {
    const panel = document.querySelectorAll(wrapperNavigation);
    const tabs = document.querySelectorAll(tabsElements);
    if (!panel || !tabs) return;

    let panelSelectorActive = wrapperNavigation.split(" ");
    let tabsSelectorActive = tabsElements.split(" ");
    panelSelectorActive = panelSelectorActive[1].slice(1) + "_active";
    tabsSelectorActive = tabsSelectorActive[1].slice(1) + "_active";

    panel.forEach(tabControl => {
      tabControl.addEventListener("click", (e) => {
        panel.forEach(item => {
          item.classList.remove(panelSelectorActive);
        });
        e.target.classList.add(panelSelectorActive);
        let tabNum = e.target.getAttribute("data-tab-num");

        tabs.forEach(tab => {
          if (tab.getAttribute("data-tab-num") == tabNum) {
            tabs.forEach(item => {
              item.classList.remove(tabsSelectorActive);
            });
            tab.classList.add(tabsSelectorActive);
          }
        });
      });
    });
  }
};

export { service };
