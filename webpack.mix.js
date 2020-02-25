const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
//    .js('resources/js/vue.js', 'public/js')

   // Vue components
//    .js('resources/js/ui.js', 'public/js')
   .js('./js/app.js', './dist')

   // Sass styles
//    .sass('resources/sass/style.sass', '../resources/css')