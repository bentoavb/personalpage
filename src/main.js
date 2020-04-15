import Vue from 'vue'
import App from './App.vue'
import i18n from '@/plugins/language';
Vue.config.productionTip = false
import FlagIcon from 'vue-flag-icon';
Vue.use(FlagIcon);
import router from './config/router'

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
