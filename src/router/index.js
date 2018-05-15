import Vue from 'vue'
import Router from 'vue-router'
import Cat from '@/components/animal/Cat'
import Dog from '@/components/animal/Dog'
import Fox from '@/components/animal/Fox'
import Animal from '@/components/animal/Index'
import Apple from '@/components/fruit/Apple'
import Banana from '@/components/fruit/Banana'
import Orange from '@/components/fruit/Orange'
import Fruit from '@/components/fruit/Index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/apple' },
    {
      index:'1',
      path: '/fruit',
      name: Fruit.name,
      component: Fruit,
      class:'el-icon-view',
      title:'水果',
      children: [
        {
          index:'1-1',
          path: '/apple',
          name: Apple.name,
          component: Apple,
          title:'苹果'

        },
        {
          index:'1-2',
          path: '/banana',
          name: Banana.name,
          component: Banana,
          title:'香蕉'

        },
        {
          index:'1-3',
          path: '/orange',
          name: Orange.name,
          component: Orange,
          title:'橘子'
        }
      ]
    },
    {
      index:'2',
      path: '/animal',
      name: Animal.name,
      component: Animal,
      class:'el-icon-location-outline',
      title:'动物',
      children: [
        {
          index:'2-1',
          path: '/cat',
          name: Cat.name,
          component: Cat,
          title:'小猫'

        },
        {
          index:'2-2',
          path: '/dog',
          name: Dog.name,
          component: Dog,
          title:'小狗'
        },
        {
          index:'2-3',
          path: '/fox',
          name: Fox.name,
          component: Fox,
          title:'狐狸'

        }
      ]
    }
  ]
})
