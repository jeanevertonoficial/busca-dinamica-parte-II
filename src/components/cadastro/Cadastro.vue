<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form class="form-cad" @submit.prevent="grava()">
      <div class="controle">
        <label class="titulo-cad" for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
      </div>

      <div class="controle">
        <label class="url" for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url">
        <div class="div-foto">
          <imagem-responsiva v-transform:scale.animate="1.1" v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
        </div>
      </div>

      <div class="controle">
        <label class="descricao" for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model.lazy="foto.descricao">
        </textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link :to="{ name: 'home'}">
          <meu-botao rotulo="VOLTAR" tipo="button"/>
        </router-link>
      </div>

    </form>
  </div>

</template>

<script>


import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva";
import Botao from "../shared/botao/Botao";
import Foto from "../../domain/foto/Foto";
import FotoService from "../../domain/foto/FotoService";

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {
      foto: new Foto(),
      resource: {},
      id: this.$route.params.id
    }
  },
  methods: {
    grava() {
      this.service
          .cadastra(this.foto)
          .then(() => this.foto = new Foto(), err => console.log(err));
    }
  },
  created() {
    this.service = new FotoService(this.$resource);

    if (this.id) {
      this.service
          .busca(this.id)
          .then(foto => this.foto = foto)
    }
  }
}
</script>

<style scoped>

.imagem-responsiva {
  display: flex;
  overflow: hidden;
  width: 350px;
  margin: auto;

  margin-top: 15px;

  border: 3px solid #ffc400;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
}

.form-cad {
  min-height: 60vh;
}

.centralizado {
  text-align: center;
  margin: 3rem;
  color: rgba(229, 201, 18, 0.82);
}

.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.controle label + input, .controle textarea {
  display: flex;
  margin: auto;
  width: 50%;
  font-size: inherit;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ffc400;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
}

.centralizado {
  text-align: center;
}

.titulo-cad, .url, .descricao {
  display: flex;
  margin: auto;
  width: 50%;

  color: rgba(229, 201, 18, 0.82)
}

.div-foto {
  transition: 0.7ms;
  justify-content: center;
  display: flex;
  margin: 15px auto;
  width: 50%;
}
</style>