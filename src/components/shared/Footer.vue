<template>
  <div class="footer">
    <div slot="footer-cabecalho">
      <h1>{{ titulofooter}}</h1>
    </div>
    <p>{{ conteudofooter }}</p>
    <div slot="footer-rodape">
      <p>{{ copyright }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulofooter: "Bem vindos!",
      conteudofooter: "Site com as facilidades do Vue.js",
      copyright: "copyright 2022"
    }
  }
}
</script>

<style scoped>

footer {
  position: relative;
  width: 100%;
  height: 400px;
}


</style>