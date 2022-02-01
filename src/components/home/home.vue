<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value"
           placeholder="filtre pelo título da foto">
    <ul class="lista-fotos">
      <!-- v-for="foto of fotos" -->
      <li class="lista-fotos-item">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from "../shared/painel/Painel";
import imagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva";

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': imagemResponsiva
  },
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro: '',
    }
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        /**filtrar*/
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err));
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 80vh;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
  height: 200px;
  margin-bottom: 2rem;
}

.titulo {
  text-align: center;
  text-transform: uppercase;
  color: #03490d;
}

.filtro {
  display: block;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ffc400;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.96);
}

</style>
