import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'


import Group from '@/views/Group'
import Mine from '@/views/Mine'
import ShopCar from '@/views/ShopCar'
import Special from '@/views/Special'
import Login from '@/views/Login'
Vue.use(Router)

export default new Router({

    routes: [
        {
          path: '/',
          redirect:{
            'name':'home'
          }
        },
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/group',
          name: 'group',
          component: Group
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: ShopCar
        },
        {
            path: '/special',
            name: 'special',
            component: Special
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }

    ]
})
