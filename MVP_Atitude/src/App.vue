<template>
<div id="app" class="body-pagina">
<h1 class="titulo">{{ mvp }}</h1>

<!-- ------ Barra de pesquisa de Gifs ------ -->
  <h1 class="titulo">Pesquisar</h1>
  <input type="text" class="barra-pesquisa" name="busca" v-model="query" @keyup="searchGifs">
    <div class="" v-if="buscaGifs">
      <ul class="lista-gifs" v-for="gif in buscaGifs">
        <li class="lista-item">
          <a :href="gif.url">
            <img class="" :src="gif.images.original.url">
          </a>
          <a class="gif-user" v-if="gif.user" :href="gif.user.profile_url">
            <img class="" :src="gif.user.avatar_url" height="40" width="40">
          <a class="gif-name">{{ gif.user.display_name }}</a>
          </a>
        </li>
      </ul>
    </div>
<!-- ------ Gifs Tentendias ------ -->
<h2 class="titulo">Mais vistos</h2>
  <!-- Infinitos Gifs com v-if na coluna -->
  <div class="" v-if="tendenciaGifs">
    <ul class="lista-gifs" v-for="gif in tendenciaGifs">
      <li class="lista-item">
        <a :href="gif.url">
          <img class="" :src="gif.images.original.url">
        </a>
        <a class="gif-user" v-if="gif.user" :href="gif.user.profile_url">
          <img class="" :src="gif.user.avatar_url" height="40" width="40">
        <a class="gif-name">{{ gif.user.display_name }}</a>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      mvp: 'MVP Atitude',
      apiUrl: 'https://api.giphy.com/v1/gifs',
      apiKey: 'PxDD9iHPyMbaDctoDE5zMIF2vobaDhaa',
      tendenciaGifs: null,
      buscaGifs: null,
      query: '',

    };
  },
  methods: {
    //Extração de Gifs
    getGifs(){
      //formato em que caso a url mude ou a chave, automaticamente ele mude
      const url = `${this.apiUrl}/trending?api_key=${this.apiKey}&limit=100`;

      fetch(url)
      //Trasnformando a promisse em json
      .then(res => res.json())
      //Tratando a resposta da Promisse e indicando onde deve ser enviada a informação
      .then(data => this.tendenciaGifs = data.data);
    },
    //Function para pesquisa usando a mesma estrutra da função GetGifs
    searchGifs(){
      //Limite de 8 resultadaos
      const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${this.query}&limit=8`;
      fetch(url)
      .then(res => res.json())
      .then(data => this.buscaGifs = data.data);

    }
    },
    created() {
      this.getGifs();
    },

};
</script>

<style>

.body-pagina{
  font-family: Helvetica, sans-serif;
  width: 95%;
  margin: 0 auto;
}

.titulo{
  text-align: center;
}

.lista-gifs{
  list-style: none;
}

.lista-gifs .lista-item{
  display: inline-block;
}

</style>
