import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _axios from './utils/_axios'
//引入矢量图标
import "@/assets/css/iconfont.css"

Vue.config.productionTip = false
//通过原型链把axios传给Vue实例对象
Vue.prototype._axios = _axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


