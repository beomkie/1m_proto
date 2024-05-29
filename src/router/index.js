import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '@/views/mainView.vue';
import Login from '@/views/loginView.vue';
import about from '@/views/aboutPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home 
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/about',
    name: 'about',
    component: about
  }

]

const router = new VueRouter({
    mode: 'history',
    routes
  });

  export default router