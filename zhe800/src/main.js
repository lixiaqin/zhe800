// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mock from './mock/mock'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import directives from './directive'
import store from './store'
Vue.use(VueAwesomeSwiper)
Vue.config.silent = true;
for (var key in directives) {
    Vue.directive(key, directives[key])
}
Vue.config.productionTip = false
var instance = axios.create({
    baseURL: "api", //打包上线的时候替换baseURL
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
Vue.prototype.$axios = instance;


Vue.filter('timeNum', function(value) {
        if (value != ':' && value < 10) {
            value = "0" + value
        }
        return value;
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})