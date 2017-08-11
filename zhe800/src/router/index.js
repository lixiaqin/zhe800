import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import classPage from '@/views/classPage'
import Group from '@/views/Group'
import Mine from '@/views/Mine'
import ShopCar from '@/views/ShopCar'
import Special from '@/views/Special'
import Login from '@/views/Login'
import Classify from '@/views/Classify'
import Shoppage from '@/views/Detail/component/shoppage'
import Detail from '@/views/Detail'
import store from '@/store/index'
Vue.use(Router)
let data = store.state['routerData']
console.log(data)
let classRouter = []
    // routerData.forEach(function (v,i) {
    //   let item={
    //     path:v.tag[0]
    //   }
    // })
export default new Router({

    routes: [{
            path: '/',
            redirect: {
                'name': 'home'
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
        },
        {
            path: '/classify',
            name: 'Classify',
            component: Classify
                // component: resolve => require(['@/views/Detail'], resolve)
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
                // component: resolve => require(['@/views/Detail'], resolve)
        },
        {
            path: '/shoppage/:id',
            name: 'shoppage',
            component: Shoppage
                // component: resolve => require(['@/views/Detail'], resolve)
        }

    ]
})