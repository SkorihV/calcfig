class Service {

  constructor() {
    this.multipleElementItem = document.querySelectorAll(".calc__multiselect-list");
    this.cardList = document.querySelectorAll("input.calc__card-list-input");
    this.currentBoxes = document.querySelectorAll(".calc__card-list-current-num-box");
    this.selectorListTitleItems = document.querySelectorAll(".calc__selector-list-cheked");
    this.selectorListItems = document.querySelectorAll(".calc__selector-list-wrapper");
  }

  init() {
    /*Обрабатываем все элементы с выбором количества */
    this.currenChangeInput(this.currentBoxes);

    /*Обрабатываем функционал выпадения у списков */
    this.checkThisVoid(this.multipleElementItem);

    this.multipleElementItem.forEach((item) => {
      item.addEventListener("click", this.openMultilist);
    });
    this.checkThisVoid(this.selectorListTitleItems);

    this.selectorListTitleItems.forEach((item) => {
      item.addEventListener("click", this.openMultilist);
    });

    /*Добавляем небольшие эффекты для импутов с подсказками*/
    this.checkThisVoid(this.cardList);
    this.cardList.forEach((item) => {
      item.addEventListener("input", this.changeinputCardListPlaceholder);
    });
    /*Обрабатываем нажатие на блок шагов */
    this.tabElementActivation(".calc__tabs-block-numeric .calc__tab", ".calc__tabs-content-wrapper .calc__tab-contains");
    this.tabElementActivation(".calc__rooms-area-radio .calc__radio-button", ".calc__rooms-area-wrapper .calc__rooms-area-contant");
    this.tabElementActivation(".calc__tabs-block .calc__tab", ".calc__tabs-blocks-content-wrapper .calc__tab-block-content");
    
    this.dropdownListProcessing(this.selectorListItems);
    this.cloneElementRoomsItem();
    this.editImputNameRoom();
  }
  checkThisVoid(param) {
    if (!param) {
      return;
    }
  }
  /*меняем значение в инпутах количества */
  currenChangeInput(mass) {
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
  }
  openMultilist(e) {
    let className = e.target.classList[0]
    e.target.classList.toggle(className + "_open");
  }
  changeinputCardListPlaceholder(e) {
    if (e.target.value.length > 0) {
      e.target.classList.add("calc__card-list-input_active");
    }
    if (e.target.value.length <= 0) {
      e.target.classList.remove("calc__card-list-input_active");
    };
  }
  tabElementActivation(wrapperNavigation, tabsElements) {
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
  /*Клонируем элемент крточки комнаты для расчета площадей */
  cloneElementRoomsItem() {
    const wrapperElementsWhichClone = document.querySelectorAll(".calc__rooms-area-contant");
    if (!wrapperElementsWhichClone) {
      return;
    }
    wrapperElementsWhichClone.forEach(item => {
      item.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("calc__button-plus")) {
          const copyNode = target.parentNode.parentNode;
          const cloneNode = copyNode.cloneNode(true);
          copyNode.insertAdjacentElement("afterend", cloneNode);
        }
      });
    });
  }
  editImputNameRoom() {
    const wrapperElements = document.querySelectorAll(".calc__rooms-area-contant");
    if (!wrapperElements) {
      return;
    }

    wrapperElements.forEach(item => {
      /*отображаем инпут при двойном клике на название */
      item.addEventListener("dblclick", (e) => {
        const target = e.target;
        if (target.classList.contains("calc__card-list-title")) {
          const contentNode = target.innerText;
          target.nextElementSibling.value = contentNode;
          target.parentNode.classList.add("calc__card-list-wrapper-title_edit");
        }
      });
      /*скрываем инпут при клиеке вне инпута */
      item.addEventListener("click", (e) => {
        const target = e.target;
        if ((!target.classList.contains("calc__card-list-title")) ||
          (!target.classList.contains("calc__card-list-title-input"))) {
          const editNodes = target.querySelectorAll(".calc__rooms-area-contant .calc__card-list-wrapper-title");
          editNodes.forEach(item => {
            const input = item.querySelector(".calc__card-list-title-input");
            const title = item.querySelector(".calc__card-list-title");
            title.innerText = input.value;
            item.classList.remove("calc__card-list-wrapper-title_edit");
          });
        }
      });
    })
  }
  /*Обработка выбора у выпадающего списка и подставление результата в тайтл */
  dropdownListProcessing(list) {
    if (!list) {
      return;
    }
    list.forEach(item => {
      item.addEventListener("click", function (e) {
        let mainItem = this;
        let chekedTitle = mainItem.querySelector(".calc__selector-list-cheked");
        let target = e.target;

        if (target.classList.contains("calc__selector-list-item")) {
          chekedTitle.innerHTML = target.innerHTML;
        }
      })
    })
  }

}

export default Service ;
