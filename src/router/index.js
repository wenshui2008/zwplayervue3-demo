import { createRouter,createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import DemoAdv from '../components/DemoAdv.vue'

const routes = [
  {
    path:'/home',
    name:Home,
    component:Home
  },
  
  {
    path:'/hellowold',
    component:HelloWorld
  },
  {
    path:'/advance',
    component:DemoAdv
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router;
