## Что такое Laravel Mix?

Офф.сайт [https://laravel-mix.com]()


Это специальная надстройка над сборщиком Webpack являющиеся частью фреймворка Laravel
Ранее этот инструмент носил название Elixir (Эликсир), который был отдельным плагином и требовал отдельной установки.
На данных момент Laravel Mix доступен из коробки.

### Установка


В пустой каталог инициализируем npm

`npm init -y`


Далее устанавливаем сам Laravel Mix

`npm install laravel-mix --save-dev`

Затем создаем в корне проекта файл webpack.mix.js

`touch webpack.mix.js`

и помещаем туда след.код:

```javascript
// подключение laravel-mix
let mix = require('laravel-mix');

// настройка для нативного JS
// mix.js('src/js/app.js', 'js');

// настройка для VueJS
mix.js('src/js/app.js', 'js').vue();

// настройка для CSS файла
// mix.css('src/css/main.css', 'css');

// настройка для SCSS файла
mix.sass('src/sass/app.scss', 'css');

// Настройка директории, в данный момент помещает в папку dist
mix.setPublicPath('dist');
```

Запускаем сборку

`npx mix`


и открываем файл index.html через браузер


Если вы сделали все правильно, то у вас должны отображаться ваши изменения


Этот проект на Github [https://github.com/Chifek/laravel-mix]()
