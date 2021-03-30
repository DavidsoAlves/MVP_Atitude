<template>
  <div id="app">
    <!-- Mensagem de sucesso para remover  -->
    <!-- <p v-show="mensagem" class="centralizado">{{ mensagem }}</p> -->

    <!-- ------ Barra de pesquisa de Gifs ------ -->

    <div class="centralizado mt-5 mb-3">
      <img
        src="https://blog.flamingtext.com/blog/2021/03/28/flamingtext_com_1616972873_718509426.png"
        border="0"
      />
    </div>

    <!-- Barra centralidaza e responsiva de pesquisa -->
    <b-container>
      <b-row class="mt-5 mb-5">
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <b-form-input
            type="search"
            placeholder="Digite a Arma para o Ataque"
            class="barra-pesquisa"
            name="busca"
            v-model="busca"
            @keyup="searchGifs"
          />
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>

    <!-- Resultado das Bucas -->

    <div>
      <b-row class="m-2" v-if="buscaGifs">
        <b-col cols="4 mb-5" v-for="gif in buscaGifs" :key="gif">
          <b-card class="card-gif w-100 h-100">
            <b-card-text>
              <a v-if="gif.user" :href="gif.user.profile_url">
                <b-img
                  rounded="circle"
                  :src="gif.user.avatar_url"
                  height="40"
                  width="40"
                />
                <a class="name-gif">{{ gif.user.display_name }}</a>
              </a>
            </b-card-text>

            <a :href="gif.url">
              <b-img
                center
                rounded
                class="img-gif"
                :src="gif.images.original.url"
              />
            </a>

            <b-button
              block
              variant="danger"
              class="mt-2 center"
              @click="removeInvalid()"
              >Deletar</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </div>
    <!-- ------ Gifs Tentendias ------ -->
    <h2 class="sub-titulo-gif centralizado mb-5 mt-5">
      Armas Mais Letais no Momento
    </h2>

    <!-- Infinitos Gifs com v-if na coluna -->

    <div>
      <b-row class="m-2" v-if="tendenciaGifs">
        <b-col cols="4 mb-5" v-for="gif in tendenciaGifs" :key="gif">
          <b-card class="card-gif w-100 h-100">
            <b-card-text>
              <a v-if="gif.user" :href="gif.user.profile_url">
                <b-img
                  rounded="circle"
                  :src="gif.user.avatar_url"
                  height="40"
                  width="40"
                />
                <a class="name-gif">{{ gif.user.display_name }}</a>
              </a>
            </b-card-text>

            <a :href="gif.url">
              <b-img
                center
                rounded
                class="img-gif"
                :src="gif.images.original.url"
              />
            </a>

            <b-button
              block
              variant="danger"
              class="mt-2 center"
              @click="removeInvalid()"
              >Deletar</b-button
            >
          </b-card>
        </b-col>
      </b-row>
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
      const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${this.busca}&limit=20`;
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
.sub-titulo-gif {
  font-family: "Teko", sans-serif;
  color: white;
  font-size: 40px;
}

.barra-pesquisa[type="search"] {
  border-radius: 20px;
  border: white;
  background-color: #272b30;
  color: white;
}

.name-gif {
  text-align: center;
  color: white;
  font-family: "Teko", sans-serif;
}

.img-gif {
  max-width: 100%;
  max-height: 100%;
}

.card-gif {
  background-color: #272b30;
}

.centralizado {
  text-align: center;
}
</style>
