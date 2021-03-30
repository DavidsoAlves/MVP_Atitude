<template>
  <div>
    <!-- Centralização de img responsiva -->
    <div class="centralizado mt-5">
      <img
        src="https://blog.flamingtext.com/blog/2021/03/29/flamingtext_com_1617022871_924203677.png"
        border="0"
      />
    </div>

    <h1 class="sub-titulo-cadastro mt-5">
      Vamos fazer o Darth Vader "morrer" de rir
    </h1>

    <!-- Usar o prevent para remover o evento padrão de atualização de pagina do submit -->
    <b-form @submit.prevent="salvar()" class="m-5">
      <b-form-group class="label-cadastro" label="Títutlo" label-for="título">
        <b-form-input
          id="titulo"
          autocomplete="off"
          placeholder="Entre com um título para matar... de rir"
        />
        <!-- Para uso de adição em uma API deve ser feito da maneira a seguir, porem para evitar erros será comentado a linha de código-->
        <!-- O v-model é usado para enviar e receber informações do Vue -->
        <!-- <input id="titulo-cadastro" autocomplete="off" v-model="fakeApiGifs.titulo" -->
      </b-form-group>

      <b-form-group class="label-cadastro" label-for="url" label="URL">
        <b-form-input
          id="url"
          autocomplete="off"
          placeholder="Entre com o caminho da sua arma secreta da diverção"
        />
        <!-- Para uso de adição em uma API deve ser feito da maneira a seguir, porem para evitar erros será comentado a linha de código-->
        <!-- O v-model é usado para enviar e receber informações do Vue -->
        <!-- <input id="url" autocomplete="off" v-model="fakeApiGifs.url"> -->
      </b-form-group>

      <div class="centralizado">
        <b-button variant="primary" size="lg" class="mr-3 mt-3"
          >Enviar Arma</b-button
        >
        <b-link to="/"
          ><b-button variant="danger" size="lg" type="submit" class="ml-3 mt-3"
            >Cancelar Ataque</b-button
          ></b-link
        >
      </div>
    </b-form>
    <div class="m-5 gif-cadastro mx-auto">
      <b-embed src="https://giphy.com/embed/3o7abpQzRWVA99CAI8"></b-embed>
    </div>
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
      // this.$http
      //   .post("http://FakeApiGifs/gifs", this.FakeApiGifs)
      // Limpar formulário caso seja concluido com sucesso caso contrário alerta de "valores invalidos"
      // .then(
      //   () => (this.FakeApiGifs = new FakeApiGifs()),
      //   (err) => alert("Valores inválidos")
      // );
      // Limpar formulário, enviando para o html a informação que os campos de preenchimento
      // de titulo e url, seja vazia, assim o campo é limpo sem recarregar a pagina após o click de salvar
      // this.fakeApiGifs = new FakeApiGifs();
    },
  },
};
</script>
<style scoped>
.gif-cadastro {
  width: 60%;
}

.sub-titulo-cadastro {
  text-align: center;
  color: white;
  font-family: "Teko", sans-serif;
}
.label-cadastro {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: white;
  font-size: 22px;
}

.centralizado {
  text-align: center;
}

@import url("https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap");
</style>
