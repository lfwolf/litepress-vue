import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import login from './login'
import user from './user'
import cat from './category'
import article from './article'

Vue.use(Router)

const RouterModel = new Router({
  routes: [...home,...login,...user,...cat,...article]
})

export default RouterModel
