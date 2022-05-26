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
  width: 50%;
  transition: 1s;
  display: flex;
  justify-content: start;
}


</style>