<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>

    <!-- Usar o prevent para remover o evento padrão de atualização de pagina do submit -->
    <form @submit.prevent="salvar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" />
        <!-- Para uso de adição em uma API deve ser feito da maneira a seguir, porem para evitar erros será comentado a linha de código-->
        <!-- O v-model é usado para enviar e receber informações do Vue -->
        <!-- <input id="titulo-cadastro" autocomplete="off" v-model="fakeApiGifs.titulo" -->
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" />
        <!-- Para uso de adição em uma API deve ser feito da maneira a seguir, porem para evitar erros será comentado a linha de código-->
        <!-- O v-model é usado para enviar e receber informações do Vue -->
        <!-- <input id="url" autocomplete="off" v-model="fakeApiGifs.url"> -->
      </div>

      <div class="centralizado">
        <b-button variant="success">Cadastrar</b-button>
        <router-link to="/"><button type="submit">Voltar</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import FakeApiGifs from "../../domain/fakeApiGifs/FakeApiGifs.js";

export default {
  data() {
    return {
      // Declaro FakeApiGifs da minha API Fake no qual terá os valores de titulo e url vindo da classe FakeApiGifs
      fakeApiGifs: new FakeApiGifs(),
    };
  },
  methods: {
    salvar() {
      // Caminho com post para enviar informações e seus parametros para a api
      this.$http
        .post("http://FakeApiGifs/gifs", this.FakeApiGifs)
        // Limpar formulário caso seja concluido com sucesso caso contrário alerta de "valores invalidos"
        .then(
          () => (this.FakeApiGifs = new FakeApiGifs()),
          (err) => alert("Valores inválidos")
        );

      // Limpar formulário, enviando para o html a informação que os campos de preenchimento
      // de titulo e url, seja vazia, assim o campo é limpo sem recarregar a pagina após o click de salvar
      this.fakeApiGifs = new FakeApiGifs();
    },
  },
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
