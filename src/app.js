// Подключаем стили
import './styles/reset.css'
import './styles/main.scss'


// Подключаем скрипты
import './scripts/main.js'


(function ($) {
  $(function () {
    $('select, multiple').styler({
      selectSearch: true,
    });
  });
})(jQuery);






