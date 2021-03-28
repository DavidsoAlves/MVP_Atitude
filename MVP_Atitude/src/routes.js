import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
  {path: '', component: Home, route_name: 'Home'},
  {path: '/cadastro', component: Cadastro, route_name: 'Cadastro'},
];
