<template>
<div>

  <h1>{{ mvp }}</h1>

  <ul>
    <li v-for="foto of fotos">
      <img :src="foto.url" :alt="foto.titulo">
    </li>
  </ul>

</div>
</template>

<script>
export default {
  data(){
    return{
      mvp: 'MVP Atitude',
      fotos:[{
        url:'https://img.elo7.com.br/product/main/2C475C8/teste-teste.jpg',
        titulo: 'teste'
      },
      {
        url:'https://img.elo7.com.br/product/main/2C475C8/teste-teste.jpg',
        titulo: 'teste2'
      }
      ],
    }

  }
}
</script>

<style>
</style>
