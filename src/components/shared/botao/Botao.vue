<template>
  <button
      @click="disparaAcao()"
      class="botao"
      :class="estiloDoBotao"
      :type="tipo">{{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String
    },

    rotulo: {
      required: true,
      type: String
    },

    confirmacao: {
      required: false,
      default: false,
      type: Boolean
    },

    estilo: {
      required: false,
      default: 'padrao',
      type: String
    }
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm('Deseja remover esta imagem?')) {
          this.$emit('botaoAtivado');
        }
        return;
      }
      this.$emit('botaoAtivado');
    }
  },

  computed: {
    estiloDoBotao: function () {
      let estiloDoBotao;
      if (this.estilo == 'padrao' || !this.estilo) {
        estiloDoBotao = 'botao-padrao';
      } else if (this.estilo == 'remover') {
        estiloDoBotao = 'botao-remover';
      }
      return estiloDoBotao;
    }
  }
}
</script>

<style scoped>

.botao {
  margin: 0.50rem;

  min-width: 100px;
  box-shadow: -10px 20px 20px rgba(152, 148, 148, 0.78);
  border-radius: 10px;
  border: none;
}

.botao:hover {
  transition: .5s;
  transform: scale(1.1);
  box-shadow: 0px 0px 0px rgba(152, 148, 148, 0.78);
  background: rgba(229, 149, 28, 0.54);
  color: #ffffff;
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