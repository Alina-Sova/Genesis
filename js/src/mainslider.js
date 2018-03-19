"use strict"

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const initialGirls = [
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Диана",
        "photo": "diana",
        "age": 20,
        "city": "Самара, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 3,
        "isTop": true
    },
     {
        "gender": "Девушка",
        "name": "Аня",
        "photo": "anya",
        "age": 18,
        "city": "Ростов-на-Дону, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 145,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Анжелика",
        "photo": "anjelika",
        "age": 27,
        "city": "Чебоксары, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 17,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Лариса",
        "photo": "larisa",
        "age": 32,
        "city": "Москва, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 12,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Настя",
        "photo": "nastya",
        "age": 21,
        "city": "Зеленоград, Россия",
        "isFavorite": true,
        "isOnline": false,
        "howManyPh": 3,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Евгения",
        "photo": "eugenia",
        "age": 30,
        "city": "Ростов-на-Дону, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 4,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Ольга",
        "photo": "olga",
        "age": 25,
        "city": "Казань, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 28,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Лариса",
        "photo": "larisa",
        "age": 32,
        "city": "Москва, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 12,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },  
    {
        "gender": "Девушка",
        "name": "Диана",
        "photo": "diana",
        "age": 20,
        "city": "Самара, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 3,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Лариса",
        "photo": "larisa",
        "age": 32,
        "city": "Москва, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 12,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
{
        "gender": "Девушка",
        "name": "Диана",
        "photo": "diana",
        "age": 20,
        "city": "Самара, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 3,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    }
]

ready(() => {
    let girls = initialGirls;
    const girlSlider = document.getElementsByClassName('list-result')[0];
    const pagNav = document.getElementsByClassName('pag-nav')[0];

    let onPageMax; // количество фотографий на странице
    let maxPag; // количество элементов пгинации, видимых на экране

    const maxGirls = () => { // функция заносит в переменные количество девушек, отображающееся на экране и количество кнопок пагинации с цифрами
        if(window.innerWidth < 480) {
            // return [1,0];
            onPageMax = 1;
            maxPag = 0;
        } else if (window.innerWidth < 768) {
            // return [2, 3];
            onPageMax = 2;
            maxPag = 3;
        } else if (window.innerWidth < 1025) {
            // return [6, 5];
            onPageMax = 6;
            maxPag = 5;
        } else {
            // return [8, 7];
            onPageMax = 8;
            maxPag = 7;
        }
    }

    const pagDrow = (thisnow) => { //функция отрисовки пагинации
        pagNav.innerHTML = '';
        pageCount < 1 ? pagNav.style.display = "none" : pagNav.style.display = "block";
        pagNav.innerHTML += `<li class = "page-num"><span class="page-prev">&lt;</span></li>`;
        if(maxPag > 0) { //вообще можно выводить цифры
            if (pageCount >= maxPag) {//если страниц больше, чем корректно выводится на экране
                if((pageCount - thisnow - 1 >= (maxPag-1)/2) && (thisnow > (maxPag-1)/2)) {//обычная ситуация
                    for (let i = thisnow + 1 - (maxPag-1)/2; i < thisnow + 2 + (maxPag-1)/2; i++) {
                        pagNav.innerHTML += `<li class="page-num"><span class="pn">${i}</span></li>`
                    }
                    document.getElementsByClassName('pn')[(maxPag-1)/2].classList.add("active");
                } else if(pageCount - thisnow - 1 < (maxPag-1)/2) { //если последние страницы
                    for (let i = pageCount - maxPag + 2; i < pageCount + 2; i++) {
                        pagNav.innerHTML += `<li class="page-num"><span class="pn">${i}</span></li>`
                    }
                    document.getElementsByClassName('pn')[maxPag - (pageCount - thisnow + 1)].classList.add("active");
                } else { //если первые страницы
                    for (let i = 0; i < maxPag; i++) {
                        pagNav.innerHTML += `<li class="page-num"><span class="pn">${i+1}</span></li>`
                    }
                    document.getElementsByClassName('pn')[thisnow].classList.add("active");
                }
            } else { //количество страниц маленькое
                for (let i = 0; i <= pageCount; i++) {
                    pagNav.innerHTML += `<li class="page-num"><span class="pn">${i + 1}</span></li>`
                }
                document.getElementsByClassName('pn')[thisnow].classList.add("active");
            }
        }
        pagNav.innerHTML += `<li class = "page-num"><span class="page-next">&gt;</span></li>`;

    }

    const doList = (object) => { //Функция превращает объект в ноду
        if(object!= undefined) {
            return( `
                                <li class="res-item">
                                    <figure class="result">
                                        <div class="photo">
                                            <img src="images/${object.photo}.jpg" alt="bigbabe">
                                            <a href="" class="count-ph">
                                                <span class = "camera"></span> <!-- photo icon -->
                                                <span>${object.howManyPh}</span> <!-- count of photoes -->
                                            </a>
                                            <a href="" class="${object.isTop ? "top" : "top-no"}">Топ</a>
                                        </div>
                                        <figcaption>
                                            <ul class="like-menu">
                                                <li class="menu-item"><span class = "favour-link"><span class="star ${object.isFavorite ? "star-fullwhite" : "star-white"}"></span>Избранное</span></li>
                                                <li class="menu-item"><a href=""><span class="mail"></span>Написать</a></li>
                                            </ul>
                                            <div class="info">
                                                <p>${object.name}, ${object.age} <span class="${object.isOnline ? "online" : "online-no"}"></span></p>
                                                <p class="info-city">${object.city}</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>`
                    );
                
            } else { //Если элементов меньше, чем обычно на странице, заменяем их пустыми нодами
                const neededHeight = document.querySelector('.res-item').offsetHeight;
                return (
                    `
                        <li class="res-item" style = "height: ${neededHeight}px"></li>`
                );
            }

    }
    
    //Adding as Favourite only MarkUp
    const letsLike = () => {
        const starS = document.getElementsByClassName('star');
        const dolike = (e) => { // функция изменения визуального изображения иконки
            const numberGirl = pageNow * onPageMax + [...starS].indexOf(e.target.children[0]); //получаю номер девочки, на которую кликают

            if(girls[numberGirl].isFavorite === true) {
                e.target.children[0].classList.remove('star-fullwhite');
                e.target.children[0].classList.add('star-white');
                girls[numberGirl].isFavorite = false; 
            } else {
                e.target.children[0].classList.remove('star-white');
                e.target.children[0].classList.add('star-fullwhite');
                girls[numberGirl].isFavorite = true; // Девочка теперь до перезагрузки страницы может быть найдена при активной "Популярные"
            }
        } 

        [...starS].forEach(like => {
            like.parentNode.addEventListener("click", dolike, false);
        });
    }

    const showList = () => { //Отображение списка девчонок
        girlSlider.innerHTML = '';
        for(let i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
                girlSlider.innerHTML += doList(girls[i]);
        }
        letsLike();
        
    }
    
    const changePage = (e) => { //функция изменения страницы
        if (e.target.classList.contains('page-prev')) {
            --pageNow < 0 ? pageNow = 0 : showList();
            pagDrow(pageNow);
        } else if (e.target.classList.contains('page-next')) {
            ++pageNow > pageCount ? pageNow = pageCount : showList();
            pagDrow(pageNow);
        } else if (e.target.classList.contains('pn')) {
            e.target.innerHTML - 1 == pageNow ? false : pageNow = e.target.innerHTML - 1, showList(), pagDrow(pageNow);
        }
    }


    //////SEARCHING
    const formSearchButton = document.getElementsByClassName('button-search')[0];

    formSearchButton.onclick = (e) => { //SEARCHING GIRLS
        e.preventDefault();
        const valueCity = document.querySelector('input[type=text]').getAttribute('value');
        const valueGender = document.querySelector('select').value;
        const valueAgeMin = document.getElementById('year-min').value;
        const valueAgeMax = document.getElementById('year-max').value;
        girls = girls.filter(girl => {
            if (valueGender === girl.gender && valueCity === girl.city && girl.age <= valueAgeMax && girl.age >= valueAgeMin) {
                return girl;
            }
        });

        pageCount = Math.ceil(girls.length / onPageMax) - 1;
        
        if(girls.length) {
            showList();
            pageNow = 0;
            pagDrow(pageNow);
        } else {
            girlSlider.innerHTML = "<div class='errorfound'>Никого не найдено. Для повторной попытки нажмите 'Новые'</div>";
            pagNav.innerHTML = '';
        }
        

    }

    //FILTERING
    const isOnlineButton = document.getElementsByClassName('menu-switcher')[0].children[0];
    isOnlineButton.onclick = (e) => {
        e.preventDefault();
        girls = girls.filter(girl => {
            if (girl.isOnline === true) return girl;
        })
        pageCount = Math.ceil(girls.length / onPageMax) - 1;
        showList();
        pageNow = 0;
        pagDrow(pageNow);
    }

    const isPopularButton = document.getElementsByClassName('menu-switcher')[0].children[2];
    isPopularButton.onclick = (e) => {
        e.preventDefault();
        girls = girls.filter(girl => {
            if (girl.isFavorite === true || girl.isTop === true) return girl;
        })

        pageCount = Math.ceil(girls.length / onPageMax) - 1;
        showList();

        pageNow = 0;
        pagDrow(pageNow);
    }

    const goNew = document.getElementsByClassName('menu-switcher')[0].children[1];
    goNew.onclick = (e) => {
        e.preventDefault();
        girls = initialGirls;

        pageCount = Math.ceil(girls.length / onPageMax) - 1;
        showList();

        pageNow = 0;
        pagDrow(pageNow);
    }

    //START

    maxGirls();

    let pageCount = Math.ceil(girls.length / onPageMax) - 1; //Высчитываем кол-во страниц
    let pageNow = 0;
    
    showList(); //Отрисовываем окно найденок
    pagDrow(pageNow); //И к ним пагинация

    document.addEventListener("click", changePage, false);
    
    window.onresize = () => { //Перерисовываю поиск при изменении размеров окна браузера
        maxGirls();
        showList();
        pageNow = 0;
        pagDrow(pageNow);
    }






})
