import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ItemList from '@/components/ItemList'
import NotFoundComponent from '@/components/NotFoundComponent'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', name: 'NotFoundComponent', component: NotFoundComponent },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/itemList',
      name: 'ItemList',
      component: ItemList
    }
  ]
})
