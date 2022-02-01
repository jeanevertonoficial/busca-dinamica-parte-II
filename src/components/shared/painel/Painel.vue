<template>

  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
    <transition name="painel-fade">
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
/* scoped , para fazer modificação somente em um componente global por pagina*/
/* estilo do painel */

.painel {
  padding: 0;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  border-radius: 5px 5px 0 0;
  text-align: center;
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
  border-radius: 5px 5px 0 0;
}

.painel-fade-enter, .painel-leave-active {
  opacity: 0;
}

.painel-fade-enter-active, .painel-fade-leave-active
{
  transition: opacity .4s;
}

</style>
