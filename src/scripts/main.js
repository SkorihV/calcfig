

document.addEventListener("DOMContentLoaded", () => {

  const multipleElementItem = document.querySelectorAll(".calc__multiselect-list");
  const cardList = document.querySelectorAll(".calc__box-card-list input");
  const tabsListNumeric = document.querySelectorAll(".calc__tabs-block-numeric .calc__tab");
  const tabContantList = document.querySelectorAll(".calc__tabs-content-wrapper .calc__tab-contains");

  let openMultilist = (e) => {
    e.target.classList.toggle("calc__multiselect-list-title_open");
  }
  if (multipleElementItem) {
    multipleElementItem.forEach(item => {
      item.addEventListener("click", openMultilist);
    });
  }

  /*Добавляем небольшие эффекты для импутов с подсказками*/
  let changeinputCardList = (e) => {
    if (e.target.value > 0) {
      e.target.classList.add("calc__card-list-input_opened");
    } else {
      e.target.classList.remove("calc__card-list-input_opened");
    };
  };
  if (cardList) {
    cardList.forEach(item => {
      item.addEventListener("change", changeinputCardList);
    });
  }

  /*Обрабатываем нажатие на блок шагов */

  let openStepsTab = (e) => {
    tabsListNumeric.forEach(item => {
      item.classList.remove("calc__tab_active");
    });
    e.target.classList.add("calc__tab_active");
    let tabNum = e.target.getAttribute("data-tab-num");
    if (tabContantList) {
      tabContantList.forEach(item => {
        if (item.getAttribute("data-tab-num") == tabNum) {
          tabContantList.forEach(item2 => {
            item2.classList.remove("calc__tab-contains_active");
          });
          item.classList.add("calc__tab-contains_active");
        }
      });
    }
  }
  if (tabsListNumeric) {
    console.log(tabsListNumeric);
    tabsListNumeric.forEach(item2 => {
      item2.addEventListener("click", openStepsTab);
    });
  }


});

