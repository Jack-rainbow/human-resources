/* eslint-disable import/extensions */
import Vue from 'vue';

import App from './views/login/index.vue';
import router from './router/router';
import store from './store/store';
import './plugins/element.js';
import './style/global.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
