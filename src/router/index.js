import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Level1 from '../views/Level1.vue'
import Level2 from '../views/Level2.vue'
import Level3 from '../views/Level3.vue'
import Level4 from '../views/Level4.vue'
import Level5 from '../views/Level5.vue'
import Level6 from '../views/Level6.vue'
import Level7 from '../views/Level7.vue'
import Level8 from '../views/Level8.vue'
import Level9 from '../views/Level9.vue'
import Level10 from '../views/Level10.vue'
import Level11 from '../views/Level11.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/1',
    name: 'Level1',
    component: Level1
  },
  {
    path: '/2',
    name: 'Level2',
    component: Level2
  },
  {
    path: '/3',
    name: 'Level3',
    component: Level3
  },
  {
    path: '/4',
    name: 'Level4',
    component: Level4
  },
  {
    path: '/5',
    name: 'Level5',
    component: Level5
  },
  {
    path: '/6',
    name: 'Level6',
    component: Level6
  },
  {
    path: '/7',
    name: 'Level7',
    component: Level7
  },
  {
    path: '/8',
    name: 'Level8',
    component: Level8
  },
  {
    path: '/9',
    name: 'Level9',
    component: Level9
  },
  {
    path: '/10',
    name: 'Level10',
    component: Level10
  },
  {
    path: '/11',
    name: 'Level11',
    component: Level11
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
