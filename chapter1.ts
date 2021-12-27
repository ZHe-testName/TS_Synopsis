// Type-Script - это надмножество языка JS
// Перед запуском он должен скомпилироваться в JSONТак как браузеры не понимают TS

// Он используется для того чтобы привнести в JS возможность типизации и создания
// сложных типовб и интерфейсов

// ТS следует новейшим спейификициям и
// добавляет в JS все прелести строготипизированых языков
// такие как типы, интерфийсы, декоратры, обобщеные типы, поля классов, ключевые слова
// public, protected private и т.п.

// Процес разработки на TS состоит из трех фаз

// {a.ts, b.ts,}

// --> 1 - Компиляция ts файлов в js

// {a.js, b.js}

// --> 2 - Создание бандла (допустим с помощю Webpak)

// {main.js}

// --> 3 - развертывание бандла

// {main.js}

// TS можно использовать целиком или частично в js проэктах
// можно смело подключать любые библиотеки
// Чтобы среда разработки могла подтягивать автоподставки и смотреть за типами в библиотеке должен быть
// файл с расширением d.ts в котроом описаны все типы

// 1.1

// Нужна установка компилятора для ts
// С помощю Node можно усановить компилятор ts глобально через команду
// npm install -g typescript

function getFinalPrice (price: number, discount: number){
    return price - (price / discount);
};

console.log(getFinalPrice(100, 10));
console.log(getFinalPrice(300, 10));
// console.log(getFinalPrice(100, "10%"));//тут компилятор должен выдать ошибку
//Комптлятор можно настраивать при помощи директивы --t после котроых передать опцию
//настройки
//но в основном используется инициализация проекта
//и в файле tsconfig.json указываются все настройки
//или же в директории где есть данный файл можно запустить tsc
//и он автоматически скомпилирует файлы

//дла запуска кода ts можно юзать REPL(Read-Evaluate-Print-Loop)
//(цикл чтения вычисления печати)

