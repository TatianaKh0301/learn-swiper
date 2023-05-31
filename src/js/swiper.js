new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // pagination : {
        // el: '.swiper-pagination',
        // Буллеты
        // clickable: true,

        // Динамические буллеты
        // dynamicBullets: true,

        // Кастомные буллеты
        // renderBullet: function (index, className) {
        //     return '<span class="' +  className + '">' + (index + 1) + '</span>';
        // },

        // фракция
        // type: 'fraction',

        // Кастомный вывод фракции
        // renderFraction: function(currentClass, totalClass) {
        //     return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>'
        // }

        // Прогресс бар
        // type: 'progressbar',

        // Скролл        
    // }
    scrollbar: {
        el: '.swiper-scrollbar',
        // возможность перетаскивать скролл
        draggable: true,
    },
    // Изменение курсора мыши со стрелки на руку
    // grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Управление клавиатурой
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить только когда слайдер в пределать вьюпорта
        onlyInViewport: true, 
        // Включить/выключить управление клавиатурой pageUp, pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensivity: 1,
        // Класс объекта, на котором будет срабатывать прокрутка мышью
        // eventsTarget: ".image-slider",
    },

    // Автовысота
    // autoHeight: true,
    // Если многострочность, то
    autoHeight: false,


    // Количество слайдов для показов
    slidesPerView: 3,

    // Отступ между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    slidesPerGroup: 3,

    // Мультирядность
    // slidesPerColumn: 2,

    // Бесконечный слайдер
    loop: true,

    // количество дублирующий слайдов
    loopedSlides: 3,

    // Авто прокрутка
    autoplay: {
        // Пауза между прокруткой
        delay: 1000,
        // Закончить на последнем слайде
        stopOnLastSlide: true,
        // Отключить после ручного переключения
        disableOnInteraction: false,
    }

});