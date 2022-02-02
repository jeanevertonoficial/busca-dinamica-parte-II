<template>
  <div class="corpo">
    <meu-menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  <Footer/>
  </div>
</template>

<script>

import {routes} from "@/routes";
import menu from "@/components/shared/menu/menu.vue";
import Footer from "@/components/shared/footer/Footer";

export default {
  components: {
    'meu-menu': menu,
    Footer
  },
  data() {
    return {
      routes
    }
  }
}

</script>

<style scoped>

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
}

.pagina-enter, .pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active, .pagina-leave-active {
  transition: opacity .4s;
}


</style>

