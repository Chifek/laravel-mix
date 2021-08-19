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
