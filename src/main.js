import Vue from 'vue'
import App from './App.vue'
import VueResourceEsm from "vue-resource";
import VueRouter from "vue-router";
import {routes} from "@/routes";

Vue.use(VueRouter);
Vue.use(VueResourceEsm);

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
