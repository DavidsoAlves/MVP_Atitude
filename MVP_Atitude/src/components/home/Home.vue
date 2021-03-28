<template>
  <div id="app">

    <!-- Mensagem de sucesso para remover  -->
    <!-- <p v-show="mensagem" class="centralizado">{{ mensagem }}</p> -->

    <!-- ------ Barra de pesquisa de Gifs ------ -->
    <div>
      <img src="https://blog.flamingtext.com/blog/2021/03/28/flamingtext_com_1616972873_718509426.png" border="0">
    </div>


    <h1 class="titulo">Pesquisar</h1>

    <input
      type="text"
      placeholder="Digite o Gif"
      class="barra-pesquisa"
      name="busca"
      v-model="busca"
      @keyup="searchGifs"
    />

    <div class="" v-if="buscaGifs">
      <ul class="lista-gifs" v-for="gif in buscaGifs" :key="gif">
        <li class="lista-item">
          <b-card class="painel">

            <a class="" v-if="gif.user" :href="gif.user.profile_url">
              <img class="" :src="gif.user.avatar_url" height="40" width="40" />
              <a class="gif-name">{{ gif.user.display_name }}</a>
            </a>

            <div class="painel-item">
              <a :href="gif.url">
                <div class="img">
                  <img class="" :src="gif.images.original.url" />
                </div>
              </a>
            </div>
          </b-card>
        </li>
      </ul>
    </div>
    <!-- ------ Gifs Tentendias ------ -->
    <h2 class="titulo">Mais vistos</h2>
    <!-- Infinitos Gifs com v-if na coluna -->
    <div class="" v-if="tendenciaGifs">
      <ul class="lista-gifs" v-for="gif in tendenciaGifs" :key="gif">
        <li class="lista-item">
          <div class="painel">

            <a class="" v-if="gif.user" :href="gif.user.profile_url">
              <img class="" :src="gif.user.avatar_url" height="40" width="40" />
              <a class="gif-name">{{ gif.user.display_name }}</a>
            </a>

            <div class="painel-item">
              <a :href="gif.url">
                <img class="img" :src="gif.images.original.url" />
              </a>

              <button class="button red-button" @click="removeInvalid()">
                Deletar
              </button>

            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mvp: "MVP Atitude",
      apiUrl: "https://api.giphy.com/v1/gifs",
      apiKey: "PxDD9iHPyMbaDctoDE5zMIF2vobaDhaa",
      tendenciaGifs: null,
      buscaGifs: null,
      busca: "",
      mensagem: "",
    };
  },
  methods: {

    //Extração de Gifs
    getGifs() {
      //formato em que caso a url mude ou a chave, automaticamente ele mude
      const url = `${this.apiUrl}/trending?api_key=${this.apiKey}`;

      fetch(url)
        //Trasnformando a promisse em json
        .then((res) => res.json())
        //Tratando a resposta da Promisse e indicando onde deve ser enviada a informação
        .then((data) => (this.tendenciaGifs = data.data));
    },

    //Function para pesquisa usando a mesma estrutra da função GetGifs
    searchGifs() {
      //Limite de 8 resultados para evitar travamento de tela por grande volume
      const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${this.busca}&limit=8`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.buscaGifs = data.data));
    },
    //função de remover gif, porém como a api é externa não é possivel remove-la
    // removeGif(){
    //   this.$http
    //   .delete(`${this.apiUrl}${gif.id}`)
    //   .then(() => {
    //     // Usando javaScript para pegar a posição do gif a ser removido e após remove-lo sem atualizar a pagina
    //     let indice = this.FakeApiGifs.index0f(gif);
    //     this.FakeApiGifs.splice(indice,1);
    //     this.mensagem = 'Gif removido com sucesso';
    //   }, err => {
    //     this.mensagem = "Não foi possivel remover o Gif"
    //   } );z
    // },

    removeInvalid() {

      alert(
        "Está tentando ajudar o Darth Vader? Não foi você quem fez... impossivel remoção!"
      );
    },
  },

  created() {
    this.getGifs();
  },
};

</script>

<style>
.body-pagina {
  font-family: Helvetica, sans-serif;
  width: 95%;
  margin: 0 auto;
}

.titulo {
  text-align: center;
}

.lista-gifs {
  list-style: none;
}

.lista-gifs .lista-item {
  display: inline-block;
}

.img {
  width: 96%;
  height: 96%;
}

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.red-button {
  background: firebrick;
  color: white;
}

.defoult-button {
  background: darkcyan;
  color: white;
}
</style>
