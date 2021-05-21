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
        <select class="calc__selector-list" data-placeholder="Выберите менеджера">
          <option value="Выберите менеджера">Выберите менеджера</option>
          <option value="Малютин Илья">Малютин Илья</option>
          <option value="Ферман Александра">Ферман Александра</option>
        </select>
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
        <div class="calc__tab-contains"></div>
        <div class="calc__tab" data-tab-num="2">
          <span class="calc__tab-num">2</span>Опции ремонта
        </div>
        <div class="calc__tab-contains"></div>
        <div class="calc__tab" data-tab-num="3">
          <span class="calc__tab-num">3</span>Материалы
        </div>
        <div class="calc__tab-contains"></div>
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
          <input class="calc__radio-button" type="radio" name="room-area" id="room-area1">
          <label for="room-area1" class="calc__radio-label">Все данные</label>
        </div>
        <div class="calc__radio-container">
          <input class="calc__radio-button" type="radio" name="room-area" id="room-area2">
          <label for="room-area2" class="calc__radio-label">Только площадь комнат</label>
        </div>
        <div class="calc__radio-container">
          <input class="calc__radio-button" type="radio" name="room-area" id="room-area3">
          <label for="room-area3" class="calc__radio-label">Только общая площадь</label>
        </div>        
      </div>
      <div class="calc__rooms-area-wrapper">
        <div class="calc__rooms-area-contant calc__rooms-area-contant_active" data-area-tab-num="1">
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

        <div class="calc__rooms-area-contant" data-area-tab-num="2">

        </div>
        <div class="calc__rooms-area-contant" data-area-tab-num="3">

        </div>
      </div>
      <div class="calc__button-next-step">Следующий шаг
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5306 6.39386C13.8235 6.10096 13.8235 5.62609 13.5306 5.3332L8.75766 0.560225C8.46477 0.267331 7.9899 0.267331 7.697 0.560225C7.40411 0.853118 7.40411 1.32799 7.697 1.62088L11.9396 5.86353L7.697 10.1062C7.40411 10.3991 7.40411 10.8739 7.697 11.1668C7.9899 11.4597 8.46477 11.4597 8.75766 11.1668L13.5306 6.39386ZM0.000305176 6.61353H13.0003V5.11353H0.000305176V6.61353Z"
                fill="white" />
            </svg>
          </div>
    </div>
    <!--Второй шаг -->
    <div class="calc__tab-contains" data-tab-num="2">222222</div>
    <div class="calc__tab-contains" data-tab-num="3">333</div>
  </div>
  <div class="calc__right-half"></div>
</form>



<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> 
<script src="./src/scripts/jQueryFormStyler-master/dist/jquery.formstyler.min.js"></script>
<script src="./dist/main.js"></script>
</body>
</html>
