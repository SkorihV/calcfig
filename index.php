<!DOCTYPE html>
<html prefix='og:http://ogp.me/ns#'>
<head lang="ru">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">



  <title>Калькулятор</title>

  <link rel="stylesheet" type="text/css" href="./dist/main.css"/>
</head>
<body>

<div class="standart-felds">
    <form action="#" class="form-test-fields">
      <div class="container-box dislpay-none">
        <div class="box-title"></div>
        <div class="box-field"></div>
        <div class="boxes"></div>
      </div>

      <div class="container-box">
        <div class="box-title">Кнопка</div>
        <div class="box-field-buttons">
          <div class="boxes">
            <div class="sub-title">disabled</div>
            <div class="sub-title">hover</div>
          </div>
          <div class="boxes">
            <div class="calc__button-next-step">Следующий шаг
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5306 6.39386C13.8235 6.10096 13.8235 5.62609 13.5306 5.3332L8.75766 0.560225C8.46477 0.267331 7.9899 0.267331 7.697 0.560225C7.40411 0.853118 7.40411 1.32799 7.697 1.62088L11.9396 5.86353L7.697 10.1062C7.40411 10.3991 7.40411 10.8739 7.697 11.1668C7.9899 11.4597 8.46477 11.4597 8.75766 11.1668L13.5306 6.39386ZM0.000305176 6.61353H13.0003V5.11353H0.000305176V6.61353Z"
                  fill="white" />
              </svg>
            </div>
            <div class="calc__button-next-step calc__button-next-step_hover">Следующий шаг
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5306 6.39386C13.8235 6.10096 13.8235 5.62609 13.5306 5.3332L8.75766 0.560225C8.46477 0.267331 7.9899 0.267331 7.697 0.560225C7.40411 0.853118 7.40411 1.32799 7.697 1.62088L11.9396 5.86353L7.697 10.1062C7.40411 10.3991 7.40411 10.8739 7.697 11.1668C7.9899 11.4597 8.46477 11.4597 8.75766 11.1668L13.5306 6.39386ZM0.000305176 6.61353H13.0003V5.11353H0.000305176V6.61353Z"
                  fill="white" />
              </svg>
            </div>
          </div>
          <div class="boxes">
            <div class="calc__button-back-step">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.46967 6.53033C0.176777 6.23744 0.176777 5.76256 0.46967 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.46967 6.53033ZM14 6.75H1V5.25H14V6.75Z"
                  fill="#1BAD58" />
              </svg>
              Назад
            </div>

            <div class="calc__button-back-step calc__button-back-step_hover">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.46967 6.53033C0.176777 6.23744 0.176777 5.76256 0.46967 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.46967 6.53033ZM14 6.75H1V5.25H14V6.75Z"
                  fill="#1BAD58" />
              </svg>
              Назад
            </div>
          </div>
        </div>
     </div>

    <div class="container-box">
      <div class="box-title">Чекбокс, радиокнопка</div>
      <div class="boxes-chek">
        <div class="box-fields">
          <div class="sub-title">Disabled</div>
          <div class="box-field">
            <div class="calc__checbox-container">
              <input id="chek1" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="chek1" class="calc__checkbox-label"></label>
            </div>
          </div>
        </div>
        <div class="box-fields">
          <div class="sub-title">Active</div>
          <div class="box-field">
            <div class="calc__checbox-container">
              <input id="chek2" type="checkbox" class="calc__checkbox ">
              <label for="chek2" class="calc__checkbox-label calc__checkbox_active"></label>
            </div>
          </div>
        </div>
        <div class="box-fields">
          <div class="sub-title">Disabled</div>
          <div class="box-field">
            <div class="calc__button-plus calc__button-plus_disabled">+</div>
            <div class="calc__button-minus calc__button-minus_disabled">-</div>
          </div>
        </div>
        <div class="box-fields">
          <div class="sub-title">Active</div>
          <div class="box-field">
            <div class="calc__button-plus">+</div>
            <div class="calc__button-minus">-</div>
          </div>
        </div>
      </div>
      <div class="boxes-radio">
        <div class="box-fields">
          <div class="sub-title">Disabled</div>
          <div class="calc__radio-container">
            <input class="calc__radio-button" type="radio" name="r1" id="r1">
            <label for="r1" class="calc__radio-label">Радио 1</label>
          </div>
          <div class="calc__radio-container">
            <input class="calc__radio-button" type="radio" name="r1" id="r2">
            <label for="r2" class="calc__radio-label">Радио 2</label>
          </div>
        </div>
      </div>
      <div class="box-container-list">
        <div class="sub-title">Disabled</div>
        <div class="box-field"></div>
          <div class="calc__box-element-list">
            <div class="calc__checbox-container">
              <input id="chek3" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="chek3" class="calc__checkbox-label">Ремонт "white Box"</label>
            </div>
          </div>
      </div>
    </div>

    <div class="container-box">
      <div class="box-title">Карточки, списки</div>
      <div class="boxes-card-lists">
        <div class="calc__box-card-list">
          <div class="calc__card-list-title">Комната 1
            <input class="calc__card-list-title-input" type="text">
          </div>
          <div class="calc__card-list-folder-wrapper">
            <div class="calc__card-list-long">
              <input class="calc__card-list-input" type="text" size="3">
              <label class="calc__card-list-label">Длинна м<span class="calc__sup">2</span></label>
            </div>
            <div class="calc__card-list-width">
              <input class="calc__card-list-input" type="text" size="3">
              <label class="calc__card-list-label">Ширина м<span class="calc__sup">2</span></label>
            </div>
            <div class="calc__card-list-area">
              <input class="calc__card-list-input" type="text" size="3">
              <label class="calc__card-list-label">Площадь</label>
            </div>
            <div class="calc__button-plus">+</div>
          </div>
        </div>

        <div class="calc__box-card-list">
          <div class="calc__card-list-title">Комната 2</div>
          <div class="calc__card-list-folder-wrapper">
            <div class="calc__card-list-long">
              <input class="calc__card-list-input" type="text" size="3">
              <label class="calc__card-list-label">Длинна м<span class="calc__sup">2</span></label>
            </div>
            <div class="calc__card-list-area">
              <input class="calc__card-list-input" type="text" size="3">
              <label class="calc__card-list-label">Площадь</label>
            </div>
            <div class="calc__button-plus">+</div>
          </div>
        </div>

        <div class="calc__box-card-list">
          <div class="calc__card-list-title">Комната 3</div>
          <div class="calc__card-list-folder-wrapper">
            <div class="calc__card-list-long">
              <input class="calc__card-list-input" type="text" size="3">
              <label class="calc__card-list-label">Длинна м<span class="calc__sup">2</span></label>
            </div>
            <div class="calc__card-list-width">
              <input class="calc__card-list-input" type="text" size="3">
              <label class="calc__card-list-label">Ширина м<span class="calc__sup">2</span></label>
            </div>
            <div class="calc__button-plus">+</div>
          </div>
        </div>
      </div>
    </div>



    <div class="container-box">
      <div class="sub-title">Список с кнопками + / -</div>
      <div class="calc__box-card-list-current">
        <div class="calc__card-list-current-title">Душевая кабина / поддон</div>
        <div class="calc__card-list-current-num-box">
          <div class="calc__button-minus">-</div>
          <input type="text" class="calc__card-list-current-imput" value="0" size="3">
          <div class="calc__button-plus">+</div>
        </div>
      </div>
    </div>


    <div class="container-box">
      <div class="box-title">Селекторы</div>
      <div class="box-field"></div>
      <div class="boxes-selector-list">
        <div class="calc__selector-list-title">Стиль</div>
        <div class="calc__selector-list-wrapper">
          <div class="calc__selector-list-cheked">Стиль не выбран</div>
          <div class="calc_selector-list-items">
            <div class="calc__selector-list-item">ПИК Классический Светлый</div>
            <div class="calc__selector-list-item">ПИК Классический Темный</div>
            <div class="calc__selector-list-item">ПИК Современный Светлый</div>
            <div class="calc__selector-list-item">ПИК Современный Темный</div>
            <div class="calc__selector-list-item">КАСКАД Классический</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-box">
      <div class="box-title"></div>
      <div class="box-field"></div>
        <div class="calc__multiselect-list" multiple>
          <div class="calc__multiselect-list-title">Отопление</div>
          <div class="calc__box-element-list">
            <div class="calc__checbox-container">
              <input id="chek-mul-1" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="chek-mul-1" class="calc__checkbox-label">Замена систем отопления</label>
            </div>
            <div class="calc__checbox-container">
              <input id="chek-mul-2" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="chek-mul-2" class="calc__checkbox-label">Замена радиаторов"</label>
            </div>
            <div class="calc__checbox-container">
              <input id="chek-mul-3" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="chek-mul-3" class="calc__checkbox-label">Замена чего нибудь ещё</label>
            </div>
          </div>
      </div>
    </div>


    <div class="container-box">
      <div class="box-title">Табы</div>
      <div class="box-field"></div>
      <div class="calc__tabs-block">
        <div class="calc__tab" data-tab-num="1">Сантехника</div>
        <div class="calc__tab" data-tab-num="2">Кондиционирование</div>
        <div class="calc__tab" data-tab-num="3">Отделочные материалы</div>
      </div>
    </div>


    <div class="container-box">
      <div class="box-title">Табы с цифрами</div>
      <div class="box-field"></div>
      <div class="calc__tabs-block-numeric">
        <div class="calc__tab calc__tab_active" data-tab-num="1">
          <span class="calc__tab-num">1</span>Параметры помещений
        </div>
        <div class="calc__tab" data-tab-num="2">
          <span class="calc__tab-num">2</span>Опции ремонта
        </div>
        <div class="calc__tab" data-tab-num="3">
          <span class="calc__tab-num">3</span>Материалы
        </div>
      </div>
    </div>


    <div class="container-box">
      <div class="box-title">+ / -</div>
      <div class="box-field"></div>
      <div class="calc__current-control-panel">
        <div class="calc__button-minus">-</div>
        <input class="calc__current-control-panel-input" type="text" placeholder="%" size="3">
        <div class="calc__button-plus">+</div>
      </div>
    </div>


    <div class="container-box">
      <div class="box-title">Инпуты</div>
      <div class="sub-title">Disabled</div>
      <div class="calc__input">
        <input type="text" class="calc__input-item" value="какой-то текст" disabled>
      </div>
      <div class="sub-title">Active</div>
      <div class="calc__input">
        <input type="text" class="calc__input-item"  value="какой-то текст">
      </div>
    </div>

    <div class="container-box">
      <div class="box-title"></div>
      <div class="box-field"></div>
      <div class="boxes-name">
      </div>
    </div>
  </form>
  </div>


<form method="GET" action="#" class="calc-wrapper">
  <div class="calc__left-half">
  <div class="box-title">Рассчитайте стоимость ипотеки</div>
  <div class="calc__tabs-block-numeric">
        <div class="calc__tab" data-tab-num="1">
          <span class="calc__tab-num">1</span>Параметры помещений
        </div>
        <div class="calc__tab" data-tab-num="2">
          <span class="calc__tab-num">2</span>Опции ремонта
        </div>
        <div class="calc__tab" data-tab-num="3">
          <span class="calc__tab-num">3</span>Материалы
        </div>
  </div>
  <div class="calc__tabs-content-wrapper">
    <div class="calc__tab-contains" data-tab-num="1">
      <div class="calc__person-wrapper">
        <div class="calc__preson-side">
          <div class="calc__small-title">Название объекта</div>
          <input type="text" class="calc__input-item"  placeholder="Введите название объекта">
        </div>
        <div class="calc__preson-side">
          <div class="calc__small-title">Имя менеджера</div>
          <input type="text" class="calc__input-item"  placeholder="Укажите имя менеджера">
        </div>
      </div>
      <div class="calc__center-side">
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="wall" type="checkbox" class="calc__checkbox" value="wall">
            <label for="wall" class="calc__checkbox-label">Стены от застройщика</label>
          </div>
        </div>
        <input type="text" class="calc__input-item"  placeholder="Высота потолков">
      </div>
      <div class="calc__text">Заполните габариты помещений. Если выяснить габариты помещений невозможно, нажмите вкладку "Только общая площадь"</div>
      <div class="calc__rooms-area-radio">
        <div class="calc__radio-container">
          <input class="calc__radio-button" type="radio" name="room-area" id="room-area1"  data-tab-num="1">
          <label for="room-area1" class="calc__radio-label">Все данные</label>
        </div>
        <div class="calc__radio-container">
          <input class="calc__radio-button" type="radio" name="room-area" id="room-area2"  data-tab-num="2">
          <label for="room-area2" class="calc__radio-label">Только площадь комнат</label>
        </div>
        <div class="calc__radio-container">
          <input class="calc__radio-button" type="radio" name="room-area" id="room-area3" data-tab-num="3">
          <label for="room-area3" class="calc__radio-label">Только общая площадь</label>
        </div>
      </div>
      <div class="calc__rooms-area-wrapper">
<!-- начало первого таба в радио группе подбора площади-->
        <div class="calc__rooms-area-contant" data-tab-num="1">
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Комната 1</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-long">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Длинна м<span class="calc__sup">2</span></label>
              </div>
              <div class="calc__card-list-width">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Ширина м<span class="calc__sup">2</span></label>
              </div>
              <div class="calc__button-plus">+</div>
            </div>
          </div>
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Коридор</div>
              <div class="calc__card-list-folder-wrapper">
                <div class="calc__card-list-long">
                  <input class="calc__card-list-input" type="text" size="3">
                  <label class="calc__card-list-label">Длинна м<span class="calc__sup">2</span></label>
                </div>
                <div class="calc__card-list-width">
                  <input class="calc__card-list-input" type="text" size="3">
                  <label class="calc__card-list-label">Ширина м<span class="calc__sup">2</span></label>
                </div>
            </div>
          </div>
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Ванная</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-long">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Длинна м<span class="calc__sup">2</span></label>
              </div>
              <div class="calc__card-list-width">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Ширина м<span class="calc__sup">2</span></label>
              </div>
              <div class="calc__button-plus">+</div>
            </div>
          </div>
        </div>
<!-- начало второго таба в радио группе подбора площади-->
        <div class="calc__rooms-area-contant" data-tab-num="2">
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Комната 1</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-area">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Площадь</label>
              </div>
              <div class="calc__button-plus">+</div>
            </div>
          </div>
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Кухня</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-area">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Площадь</label>
              </div>
              <div class="calc__button-plus">+</div>
            </div>
          </div>
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Коридор</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-area">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Площадь</label>
              </div>
              <div class="calc__button-plus">+</div>
            </div>
          </div>
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Зал</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-area">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Площадь</label>
              </div>
              <div class="calc__button-plus">+</div>
            </div>
          </div>
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Ванная</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-area">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Площадь</label>
              </div>
              <div class="calc__button-plus">+</div>
            </div>
          </div>
        </div>
<!-- начало третьего таба в радио группе подбора площади-->
        <div class="calc__rooms-area-contant" data-tab-num="3">
          <div class="calc__box-card-list">
            <div class="calc__card-list-title">Общая площадь квартиры</div>
            <div class="calc__card-list-folder-wrapper">
              <div class="calc__card-list-area">
                <input class="calc__card-list-input" type="text" size="3">
                <label class="calc__card-list-label">Площадь</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calc__navigation-panel">
        <div class="calc__button-next-step">Следующий шаг
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5306 6.39386C13.8235 6.10096 13.8235 5.62609 13.5306 5.3332L8.75766 0.560225C8.46477 0.267331 7.9899 0.267331 7.697 0.560225C7.40411 0.853118 7.40411 1.32799 7.697 1.62088L11.9396 5.86353L7.697 10.1062C7.40411 10.3991 7.40411 10.8739 7.697 11.1668C7.9899 11.4597 8.46477 11.4597 8.75766 11.1668L13.5306 6.39386ZM0.000305176 6.61353H13.0003V5.11353H0.000305176V6.61353Z"
              fill="white" />
          </svg>
        </div>
      </div>

    </div>
    <!--Второй шаг -->
    <div class="calc__tab-contains" data-tab-num="2">
<!-- Начало блока со списком списков-->
    <div class="calc__multiselect-list-wrapper">
      <div class="calc__multiselect-list" data-name-group="heating">
        <div class="calc__multiselect-list-title">Отопление</div>
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="chek-mul-heating-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-heating-1" class="calc__checkbox-label">Замена систем отопления на коллекторную (лучевую)</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-heating-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-heating-2" class="calc__checkbox-label">Замена радиаторов"</label>
          </div>
        </div>
      </div>

      <div class="calc__multiselect-list" >
        <div class="calc__multiselect-list-title" data-name-group="noise">Шумоизоляция</div>
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="chek-mul-noise-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-noise-1" class="calc__checkbox-label">Шумоизоляция стен</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-noise-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-noise-2" class="calc__checkbox-label">Шумоизоляция потолка"</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-noise-3" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-noise-3" class="calc__checkbox-label">Шумоизоляция пола</label>
          </div>
        </div>
      </div>

      <div class="calc__multiselect-list" >
        <div class="calc__multiselect-list-title" data-name-group="vibration">Вибрация и электропароводка</div>
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="chek-mul-vibration-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-vibration-1" class="calc__checkbox-label">Приточная вентиляция</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-vibration-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-vibration-2" class="calc__checkbox-label">Электропроводка по потолку</label>
          </div>
        </div>
      </div>

      <div class="calc__multiselect-list" >
        <div class="calc__multiselect-list-title" data-name-group="roof">Потолок</div>
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="chek-mul-roof-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-roof-1" class="calc__checkbox-label">Натяжной потолок</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-roof-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-roof-2" class="calc__checkbox-label">ГКЛ потолок</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-roof-3" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-roof-3" class="calc__checkbox-label">ГКЛ потолок + натяжной в санузлах</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-roof-4" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-roof-4" class="calc__checkbox-label">Штукатурка потолка</label>
          </div>
        </div>
      </div>

      <div class="calc__multiselect-list" >
        <div class="calc__multiselect-list-title" data-name-group="floor">Пол</div>
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="chek-mul-floor-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-floor-1" class="calc__checkbox-label">Ламинат</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-floor-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-floor-2" class="calc__checkbox-label">Паркетная доска на подложку (только ПИК)</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-floor-3" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-floor-3" class="calc__checkbox-label">Паркетная доска на клей (только ПИК)</label>
          </div>
        </div>
      </div>

      <div class="calc__multiselect-list" >
        <div class="calc__multiselect-list-title" data-name-group="bathroom">Санузел</div>
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="chek-mul-bathroom-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-bathroom-1" class="calc__checkbox-label">Трубы водопроводные Rehau</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-bathroom-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-bathroom-2" class="calc__checkbox-label">Система защиты от протечек</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-bathroom-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-bathroom-2" class="calc__checkbox-label">Теплый пол в СУ</label>
          </div>
        </div>
      </div>

      <div class="calc__multiselect-list" >
        <div class="calc__multiselect-list-title" data-name-group="window">Окна и балкон</div>
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="chek-mul-window-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-window-1" class="calc__checkbox-label">Утепление балкона</label>
          </div>
          <div class="calc__checbox-container">
            <input id="chek-mul-window-2" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="chek-mul-window-2" class="calc__checkbox-label">Подоконники из искусственного камня</label>
          </div>
        </div>
      </div>
    </div>
<!-- Конец блока со списком списков-->
      <div class="calc__white-box">
        <div class="calc__box-element-list">
          <div class="calc__checbox-container">
            <input id="white-1" type="checkbox" class="calc__checkbox" value="chek1">
            <label for="white-1" class="calc__checkbox-label">Ремонт "white Box"</label>
          </div>
        </div>
      </div>
      .

      <div class="calc__navigation-panel">
        <div class="calc__button-back-step">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.46967 6.53033C0.176777 6.23744 0.176777 5.76256 0.46967 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.46967 6.53033ZM14 6.75H1V5.25H14V6.75Z"
              fill="#1BAD58" />
          </svg>
          Назад
        </div>
        <div class="calc__button-next-step">Следующий шаг
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5306 6.39386C13.8235 6.10096 13.8235 5.62609 13.5306 5.3332L8.75766 0.560225C8.46477 0.267331 7.9899 0.267331 7.697 0.560225C7.40411 0.853118 7.40411 1.32799 7.697 1.62088L11.9396 5.86353L7.697 10.1062C7.40411 10.3991 7.40411 10.8739 7.697 11.1668C7.9899 11.4597 8.46477 11.4597 8.75766 11.1668L13.5306 6.39386ZM0.000305176 6.61353H13.0003V5.11353H0.000305176V6.61353Z"
              fill="white" />
          </svg>
        </div>
      </div>

    </div>

<!--третий третий -->
    <div class="calc__tab-contains" data-tab-num="3">
      <div class="calc__tabs-block">
        <div class="calc__tab" data-tab-num="1">Сантехника</div>
        <div class="calc__tab" data-tab-num="2">Кондиционирование</div>
        <div class="calc__tab" data-tab-num="3">Отделочные материалы</div>
      </div>
      <div class="calc__tabs-blocks-content-wrapper">
        <div class="calc__tab-block-content" data-tab-num="1">

          <div class="calc__box-card-list-wrapper">
            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Ванна</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>

            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Душевая кабина / поддон</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>

            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Унитаз напольный</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>

            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Унитаз с инсталяцией</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>

            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Раковина</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>


            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Раковина</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>

            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Полотенцесушитель</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>

            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Водонагреватель / бойлер</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>

            <div class="calc__box-card-list-current">
              <div class="calc__card-list-current-title">Гигиенический душ</div>
              <div class="calc__card-list-current-num-box">
                <div class="calc__button-minus">-</div>
                <input type="text" class="calc__card-list-current-imput" value="0" size="3">
                <div class="calc__button-plus">+</div>
              </div>
            </div>
          </div>
        </div>

        <div class="calc__tab-block-content" data-tab-num="2">
          <div class="calc__box-card-list-current">
            <div class="calc__card-list-current-title">Кондиционирование</div>
            <div class="calc__card-list-current-num-box">
              <div class="calc__button-minus">-</div>
              <input type="text" class="calc__card-list-current-imput" value="0" size="3">
              <div class="calc__button-plus">+</div>
            </div>
          </div>

          <div class="calc__box-element-list">
            <div class="calc__checbox-container">
              <input id="fank-1" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="fank-1" class="calc__checkbox-label">Установлен фанкойл</label>
            </div>
          </div>

          <div class="calc__box-element-list">
            <div class="calc__checbox-container">
              <input id="copper-pipes-1" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="copper-pipes-1" class="calc__checkbox-label">Установка медных трасс по квартире от застройщика</label>
            </div>
          </div>

        </div>
        <div class="calc__tab-block-content" data-tab-num="3">

        <div class="boxes-selector-list">
        <div class="calc__selector-list-title">Стиль</div>
        <div class="calc__selector-list-wrapper">
          <div class="calc__selector-list-cheked">Стиль не выбран</div>
          <div class="calc_selector-list-items">
            <div class="calc__selector-list-item">ПИК Классический Светлый</div>
            <div class="calc__selector-list-item">ПИК Классический Темный</div>
            <div class="calc__selector-list-item">ПИК Современный Светлый</div>
            <div class="calc__selector-list-item">ПИК Современный Темный</div>
            <div class="calc__selector-list-item">КАСКАД Классический</div>
          </div>
        </div>
      </div>

          <div class="calc__box-element-list">

            <div class="calc__checbox-container-befor">
              <div class="sub-title-checkbox-before">Розетки / выключатели</div>
              <input id="standart-1" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="standart-1" class="calc__checkbox-label">Стандарт</label>

              <input id="premium-1" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="premium-1" class="calc__checkbox-label">Премиум</label>
            </div>
          </div>

          <div class="calc__box-element-list">
            <div class="calc__checbox-container-befor">
              <div class="sub-title-checkbox-before">Цвет стен</div>
              <input id="standart-2" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="standart-2" class="calc__checkbox-label">Стандарт</label>

              <input id="premium-2" type="checkbox" class="calc__checkbox" value="chek1">
              <label for="premium-2" class="calc__checkbox-label">Индвивидуальна колеровка</label>
            </div>
          </div>

          </div>
      </div>
      <div class="calc__navigation-panel">
        <div class="calc__button-back-step">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.46967 6.53033C0.176777 6.23744 0.176777 5.76256 0.46967 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.46967 6.53033ZM14 6.75H1V5.25H14V6.75Z"
              fill="#1BAD58" />
          </svg>
          Назад
        </div>
        <div class="calc__btn-watch-kp_mobile">Открыть КП</div>
      </div>
    </div>
  </div>
</div>
  <!-- вторая половина калькулятора  -->
  <div class="calc__right-half">
    <div class="calc__total-cost_pc">
      <div class="calc__total-cost-wrapper">
        <div class="calc__total-cost-title">Итого всего</div>
        <div class="calc__total-cost-value">888888</div>
      </div>
      <div class="calc__total-cost-metrs-wrapper">
        <div class="calc__total-cost-metrs-title">Итого за кв. м</div>
        <div class="calc__total-cost-metrs">55555</div>
      </div>
      <div class="calc__total-cost-work-wrapper">
        <div class="calc__total-cost-work-title">Стоимость работ</div>
        <div class="calc__total-cost-work">44343</div>
      </div>
      <div class="calc__total-cost-material-wrapper">
        <div class="calc__total-cost-material-title">Стоимость черновых материалов</div>
        <div class="calc__total-cost-material">46456</div>
      </div>
      <div class="calc__btn-watch-kp">Посмотреть КП</div>
      <div class="calc__btn-loaded-kp">Скачать КП</div>
    </div>
    <div class="calc__total-cost_mobile">

      <div class="calc__total-cost-work-wrapper">
        <div class="calc__total-cost-work-title">Работа</div>
        <div class="calc__total-cost-work">44343</div>
      </div>
      <div class="calc__total-cost-material-wrapper">
        <div class="calc__total-cost-material-title">Материалы</div>
        <div class="calc__total-cost-material">46456</div>
      </div>
      <div class="calc__total-cost-wrapper">
        <div class="calc__total-cost-title">Итого</div>
        <div class="calc__total-cost-value">888888</div>
      </div>
    </div>
  </div>
</form>


<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="./dist/main.js"></script>
</body>
</html>
