document.addEventListener('DOMContentLoaded', function () {
    var scrollTimeout;
    // Обработчик события popstate
    window.addEventListener('popstate', function(event) {
        if (event.state) {
            // Если есть состояние, прокручиваем к элементу с использованием плавной прокрутки
            var targetDiv = document.getElementById(event.state.divId);
            targetDiv.scrollIntoView({ behavior: "smooth" });
        }
    });

    scroll_container.addEventListener('scroll', function () {
        
        clearTimeout(scrollTimeout);

         scrollTimeout = setTimeout(function() {
            // Проверяем, к какому div прокручена страница
            var scrolledDiv = getScrolledDiv();
            console.log(scrolledDiv.id)
            // Применяем стили в зависимости от div
            applyStyles(scrolledDiv.id);

            var divId = scrolledDiv.id;
            history.pushState({ divId: divId }, null, '#' + divId);
        }, 100);
    });
});

function getScrolledDiv() {
    // Получаем все div с классом "scrollable-div"
    var scrollableDivs = document.querySelectorAll('.scroll-item');
    
    // Итерируем по div и проверяем, к какому из них прокручена страница
    for (var i = 0; i < scrollableDivs.length; i++) {
        var div = scrollableDivs[i];
        var rect = div.getBoundingClientRect();
        
        // Если верхний край div виден в окне просмотра контейнера, возвращаем его
        if (rect.top >= 0 && rect.top <= scroll_container.clientHeight) {
            return div;
        }
    }

    // Если ни один div не прокручен в окно просмотра контейнера, возвращаем null
    return null;
}

function applyStyles(divId) {
    var targetDiv = document.getElementById(divId);
    // Пример: изменяем цвет текста в зависимости от div
    var dots = document.getElementsByClassName('dot');
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.background = "transparent"; // Измените цвет фона на нужный вам
    }
    var hrefs = document.getElementsByClassName('navbar-item-href');
    for (var i = 0; i < hrefs.length; i++) {
        hrefs[i].classList.remove('navbar-item-href-click'); // Измените цвет фона на нужный вам
    }
    if (divId === 'main_page') {
        var dot = document.getElementById('dot-1');
        dot.style.background = '#2A2356';
        var href = document.getElementById('navbar-item-href-1');
        href.classList.add('navbar-item-href-click')
    } else if (divId === 'about_me') {
        var dot = document.getElementById('dot-2');
        dot.style.background = '#2A2356';
        var href = document.getElementById('navbar-item-href-2');
        href.classList.add('navbar-item-href-click')
    } else if (divId === 'hobbies') {
        var dot = document.getElementById('dot-3');
        dot.style.background = '#2A2356';
        var href = document.getElementById('navbar-item-href-3');
        href.classList.add('navbar-item-href-click')
    } else if (divId === 'education') {
        var dot = document.getElementById('dot-4');
        dot.style.background = '#2A2356';
        var href = document.getElementById('navbar-item-href-4');
        href.classList.add('navbar-item-href-click')
    } else if (divId === 'experience') {
        var dot = document.getElementById('dot-5');
        dot.style.background = '#2A2356';
        var href = document.getElementById('navbar-item-href-5');
        href.classList.add('navbar-item-href-click')
    }
    // Добавьте другие стили, которые вам необходимы
}

function scrollToDiv(divId) {
    // Прокручиваем к элементу с использованием плавной прокрутки
    var targetDiv = document.getElementById(divId);
    targetDiv.scrollIntoView({ behavior: "smooth" });

    // Полностью перезаписываем URL с использованием pushState
    history.pushState({ divId: divId }, null, '#' + divId);
}



document.addEventListener('DOMContentLoaded', function () {
    animateText('Nazarii Yankiv');
});

function animateText(text) {
    const textContainer = document.getElementById('item1-title');
    let index = 0;

    function addCharacter() {
        textContainer.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(addCharacter, 100); // Интервал между добавлением символов (в миллисекундах)
        }else {
            textContainer.classList.add('show-underline'); // Добавим класс для показа подчёркивания
        }
    }

    addCharacter();
}

function underlineText() {
    const textContainer = document.getElementById('navbar-item-href');
    textContainer.classList.toggle('underline');
}