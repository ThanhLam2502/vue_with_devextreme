import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from './services/api.service';
import JwtService from './services/jwt.service';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLodash, { name: 'custom', lodash });
library.add(fab, fas, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);

ApiService.init();
const token = JwtService.getToken();
if (token) {
  ApiService.setHeader();
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
