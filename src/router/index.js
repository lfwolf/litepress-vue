import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tabbar from '@/components/Tabbar/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        tarbar: Tabbar,
        test: () => import('@/components/Home')
      }
    },
    {
      path: '/album/:id',
      name: 'album',
      components: {
        default: () => import('@/components/Album')
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/components/Article')
    }
  ]
})
