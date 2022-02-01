<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo">
</template>

<script>
export default {
  props: ['url', 'titulo']
}
</script>


<style scoped>

.imagem-responsiva {
  display: flex;
  width: 100%;
}

</style>