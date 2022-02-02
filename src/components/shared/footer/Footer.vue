<template>
  <section class="base-footer">
    <div class="footer">
      <div slot="footer-cabecalho">
        <h1>Buscas dinâmicas</h1>
      </div>
      <p>Site com as facilidades do Vue.js</p>
      <div slot="footer-rodape">
        <p>copyright 2022</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}

</script>

<style scoped>

.base-footer {
  position: relative;
  width: 100%;
  height: 300px;
  display: grid;

  background: #444444;
}

.footer {
  color: white;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

</style>