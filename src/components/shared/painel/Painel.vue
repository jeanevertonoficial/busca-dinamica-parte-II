<template>

  <div class="painel">
    <h2 class="painel-titulo" @duploclick="visivel = !visivel">{{ titulo }}</h2>
    <transition name="painelfade">
      <div v-show="visivel">
        <slot class="painel-corpo"></slot>
      </div>
    </transition>
  </div>

</template>

<script>
export default {

  props: ['titulo'],

  data() {

    return {
      visivel: true
    }
  }

}
</script>

<style>

.painel {
  background: white;
  padding: 0;
  display: inline-block;
  margin: 5px;
  box-shadow: -55px 15px 35px rgb(162, 162, 162);
  width: 200px;
  height: 100%;
  vertical-align: top;
  border-radius: 5px 55px 0 0;
  text-align: center;
}

.painel:hover {
  transition: z-index;
  transition:  .5s ;
  transform: scale(1.1);
  box-shadow: 55px 15px 35px rgba(229, 149, 28, 0.18);
  z-index: 150;
}

.painel .painel-corpo {
  width: 50px;
}

.painel .painel-titulo {
  text-align: center;
  border: none;
  background: #ffc400;
  margin: 0 0 15px 0;

  padding: 10px;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 5px 35px 0 0;
}

.painelfade-enter, .painelfade-leave-active {
  opacity: 0;
}

.painelfade-enter-active, .painelfade-leave-active {
  transition: opacity .4s;
}


</style>
