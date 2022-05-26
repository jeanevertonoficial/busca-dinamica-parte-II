import Vue from 'vue'
import App from './App.vue'
import VueResourceEsm from "vue-resource";
import VueRouter from "vue-router";
import {routes} from "@/routes";
import './directives/Transform';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.use(VueResourceEsm);

// caminho absoluto da API
Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
