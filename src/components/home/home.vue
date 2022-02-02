<template>
  <div>
    <section class="base">
    <h1 class="titulo">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value"
           placeholder="filtre pelo título da foto">
    <ul class="lista-fotos">
      <!-- v-for="foto of fotos" -->
      <li class="lista-fotos-item" v-for="fotos of fotosComFiltro" :key="fotos.id">
        <painel :titulo="fotos.titulo">
          <imagem-responsiva :url="fotos.url" :titulo="fotos.titulo"/>
          <botao
              tipo="button"
              rotulo="Remover"
              @botaoAtivado="remove(fotos)"
              v-bind:confirmacao="false"
              estilo="remover"
          />
        </painel>
      </li>
    </ul>
    </section>
  </div>
</template>

<script>

import Painel from "../shared/painel/Painel";
import imagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva";
import Botao from "@/components/shared/botao/Botao";


export default {
  components: {
    'painel': Painel,
    'imagem-responsiva': imagemResponsiva,
    'botao': Botao
  },
  data() {
    return {
      titulo: "Buscas dinâmicas",
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
  // conecxão com a API com as fotos
  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err));
  },

  methods: {
    remove(foto) {
      alert('Imagem ' + foto.titulo + ' removida com Sucesso!' );
    }
  }

}
</script>

<style>

.base {
  min-height: 70vh;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos{
  display: flex;
  flex-wrap: wrap;
}

.lista-fotos .lista-fotos-item {
  margin-bottom: 2rem;
}

.titulo {
  text-align: center;
  text-transform: uppercase;
  color: rgba(229, 201, 18, 0.82);
  margin: 3rem;
}

.filtro {
  margin: auto;
  display:flex;
  justify-content: center;
  text-align: center;
  width: 60%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ffc400;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  margin-top: 1rem;
  margin-bottom: 2.75rem;
}

</style>
