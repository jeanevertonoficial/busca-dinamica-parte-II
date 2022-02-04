<template>
  <div>
    <section class="base">
      <h1 class="titulo">{{ titulo }}</h1>

      <p v-show="mensagem" class="centralizado mensagem">{{ mensagem }}</p>

      <input type="search" class="filtro" @input="filtro = $event.target.value"
             placeholder="filtre pelo título da foto">
      <ul class="lista-fotos">
        <!-- v-for="foto of fotos" -->
        <li class="lista-fotos-item" v-for="fotos of fotosComFiltro" :key="fotos.id">
          <painel :titulo="fotos.titulo">
            <imagem-responsiva v-transform:scale.animate="1.1" :url="fotos.url" :titulo="fotos.titulo"/>
            <botao
                tipo="button"
                rotulo="Remover"
                @botaoAtivado="remove(fotos)"
                v-bind:confirmacao="false"
                estilo='remover'
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
      mensagem: ''
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

    //acessando o resource
    this.resource = this.$resource('v1/fotos{/id}');

    this.resource
        .query()
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err));

    /* metodo http
    this.$http.get('v1/fotos')
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err));*/
  },

  methods: {

    remove(foto) {

      //acessando o resource

      this.resource
          .delete({id: foto._id})
          .then(
              () => {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice, 1);
                this.mensagem = 'Foto removida com sucesso'
              },
              err => {
                this.mensagem = 'Não foi possível remover a foto';
                console.log(err);
              }
          );

      /* metodo http

      this.$http
          .delete(`v1/fotos/${foto._id}`)
          .then(() => {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice, 1);
                this.mensagem = 'Foto removida com sucesso'
              },
              err => {
                console.log(err);
                this.mensagem = 'Não foi possivel remover a foto';
              }); */
    }
  },


}
</script>

<style scoped>

.base {
  min-height: 70vh;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos {
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
  display: flex;
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

.mensagem {
  text-align: center;
  width: 90%;

  color: white;

  margin: auto;
  padding: 10px;
  background: #00b91b;

  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);

  border-radius: 5px;
}

</style>
