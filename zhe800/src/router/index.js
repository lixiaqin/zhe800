import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Group from '@/components/Group'
import Mine from '@/components/Mine'
import ShopCar from '@/components/ShopCar'
import Special from '@/components/Special'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gome',
      component: Home
    },{
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
    }

  ]
})
