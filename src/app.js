// Подключаем стили
import './styles/reset.css'
import './styles/main.scss'


// Подключаем скрипты
import './scripts/jQueryFormStyler-master/dist/jquery.formstyler.min.js'
import './scripts/main.js'


(function ($) {
  $(function () {
    $('select, multiple').styler({
      selectSearch: true,
    });
  });
})(jQuery);






