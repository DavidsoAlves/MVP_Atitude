<template>
  <div>
    <b-container>
      <b-navbar toggleable="lg" type="dark" class="mt-4 rounded color-nav ">

          <b-navbar-nav cols="" class="mr-auto">
            <b-nav-item to="/"><img src="https://seeklogo.com/images/R/Rebel_Alliance-logo-0E7561F6E4-seeklogo.com.png" width="40" />
            <b-nav-text class="mr-5">Aliança Rebelde</b-nav-text>
            </b-nav-item>
          </b-navbar-nav>

          <!-- <b-navbar-nav cols="7" class="bg-danger">
            <b-nav-text class="main-text">MVP ATITUDE</b-nav-text>
          </b-navbar-nav> -->

          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/cadastro" class="float-right"
              >Ajudar a força Rebelde</b-nav-item
            >
          </b-navbar-nav>
      </b-navbar>

      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </b-container>
  </div>
</template>

<script>
import { routes } from "./routes";

export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style>
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.3s;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
* body{
  background: #343a40;
}
.color-nav{
  background: #272b30;
  /* border: rgba(255, 255, 255, 0.733) solid 1px; */
}

.main-text{
  font-size: 50px;
  color: white ;
}
</style>
