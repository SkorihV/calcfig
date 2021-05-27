import { service } from './serviceModules/serviceModules';

document.addEventListener("DOMContentLoaded", () => {

  const multipleElementItem = document.querySelectorAll(".calc__multiselect-list");
  const cardList = document.querySelectorAll("input.calc__card-list-input");
  const currentBoxes = document.querySelectorAll(".calc__card-list-current-num-box");
  const selectorListTitleItems = document.querySelectorAll(".calc__selector-list-cheked");
  const selectorListItems = document.querySelectorAll(".calc__selector-list-wrapper");


  /*Обрабатываем все элементы с выбором количества */
  service.currenChangeInput(currentBoxes);

  /*Обрабатываем функционал выпадения у списков */

  if (multipleElementItem) {
    multipleElementItem.forEach((item) => {
      item.addEventListener("click", service.openMultilist);
    });
  }
  if (selectorListTitleItems) {
    selectorListTitleItems.forEach((item) => {
      item.addEventListener("click", service.openMultilist);
    });
  }

  //service.openMultilistHandler("calc__multiselect-list-title", "calc__box-element-list");
  /*service.openMultilistHandler("calc__selector-list-cheked");*/


  /*Обработка выбора у выпадающего списка и подставление результата в тайтл */
  selectorListItems.forEach(item => {
    item.addEventListener("click", function (e) {
      let mainItem = this;
      let chekedTitle = mainItem.querySelector(".calc__selector-list-cheked");
      let target = e.target;

      if (target.classList.contains("calc__selector-list-item")) {
        chekedTitle.innerHTML = target.innerHTML;
      }
    })
  })

  /*Добавляем небольшие эффекты для импутов с подсказками*/
  if (cardList) {
    cardList.forEach((item) => {
      item.addEventListener("input", service.changeinputCardListPlaceholder);
    });
  }

  /*Обрабатываем нажатие на блок шагов */
  service.tabElementActivation(".calc__tabs-block-numeric .calc__tab", ".calc__tabs-content-wrapper .calc__tab-contains");
  service.tabElementActivation(".calc__rooms-area-radio .calc__radio-button", ".calc__rooms-area-wrapper .calc__rooms-area-contant");
  service.tabElementActivation(".calc__tabs-block .calc__tab", ".calc__tabs-blocks-content-wrapper .calc__tab-block-content");

});

