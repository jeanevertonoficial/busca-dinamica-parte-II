<template>
    <button @click="disparaAcao()" class="botao botao-remover" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
  props : ['tipo', 'rotulo'],

  methods: {
    disparaAcao() {
      if(confirm('Deseja remover esta imagem?')){
        this.$emit('botaoAtivado');
      }
    }
  }
}
</script>

<style scoped>

.botao {
  margin-bottom: 1.5rem;
  width: 100px;
  height: 25px;
  box-shadow: -10px 20px 20px rgba(152, 148, 148, 0.78);
  border-radius: 10px;
  border: none;
}

.botao:hover {
  transition: .5s;
  transform: scale(1.1);
  box-shadow: 0px 0px 0px rgba(152, 148, 148, 0.78);
  background: #ffc400;
}
.botao-remover {
  background: rgba(255, 0, 0, 0.96);
  color: white;
}

.botao-padrao {
  background: #ffc400;
  color: white;
}

</style>