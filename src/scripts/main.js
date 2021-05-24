document.addEventListener("DOMContentLoaded", () => {

  const multipleElementItem = document.querySelectorAll(".calc__multiselect-list");
  const cardList = document.querySelectorAll("input.calc__card-list-input");
  const currentBoxes = document.querySelectorAll(".calc__card-list-current-num-box");

  /*Обрабатываем все элементы с выбором количества */

  currentBoxes.forEach(item => {
    item.addEventListener("click", (e) => {
      const target = e.target;
      const inputCurrent = item.querySelector(".calc__card-list-current-imput");
      let valueInput = parseInt (inputCurrent.value);
      if (target.classList.contains("calc__button-plus")) {
        if (isNaN(valueInput))  {
          inputCurrent.value = 0;
          return;
        }
        inputCurrent.value = valueInput + 1;
      }
      if (target.classList.contains("calc__button-minus")) {
        if (isNaN(valueInput)) {
          inputCurrent.value = 0;
          return;
        }
        valueInput--;
        if (valueInput < 0 ) {
          valueInput = 0;
        }
        inputCurrent.value = valueInput;
      }
    })
  });

  let openMultilist = (e) => {
    e.target.classList.toggle("calc__multiselect-list-title_open");
  }
  if (multipleElementItem) {
    multipleElementItem.forEach((item, index) => {
      item.addEventListener("click", openMultilist);
    });
  }

  /*Добавляем небольшие эффекты для импутов с подсказками*/
  let changeinputCardList = (e) => {
    if (e.target.value > 0) {
      e.target.classList.add("calc__card-list-input_active");
    } else {
      e.target.classList.remove("calc__card-list-input_active");
    };
  };
  if (cardList) {
    cardList.forEach((item, index) => {
      item.addEventListener("change", changeinputCardList);
    });
  }

  /*Обрабатываем нажатие на блок шагов */

  function tabElementActivation(wrapperNavigation, tabsElements) {
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

  tabElementActivation(".calc__tabs-block-numeric .calc__tab", ".calc__tabs-content-wrapper .calc__tab-contains");

  tabElementActivation(".calc__rooms-area-radio .calc__radio-button", ".calc__rooms-area-wrapper .calc__rooms-area-contant");

  tabElementActivation(".calc__tabs-block .calc__tab", ".calc__tabs-blocks-content-wrapper .calc__tab-block-content");
});

