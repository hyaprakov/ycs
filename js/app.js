window.Vue = require('vue')
Vue.component('App', require('./components/App').default);

import "babel-polyfill"

const app = new Vue({
    el: '#app',
    data: function () {
        return {
            
        }
    }
})