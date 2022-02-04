import Vue from 'vue'
import App from './App.vue'
import VueResourceEsm from "vue-resource";
import VueRouter from "vue-router";
import {routes} from "@/routes";
import './directives/Transform';

Vue.use(VueRouter);
Vue.use(VueResourceEsm);

// caminho absoluto da API
Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
