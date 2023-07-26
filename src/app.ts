import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { setupServices } from './services'

import './app.scss'
import '@tarojs/taro/html.css'

setupServices()

const App = createApp({
  onShow() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/shopping/:name',
      component: () => import('@/components/shopping/shopping-main.vue'),
    },
  ],
})

App
  .use(router)
  .use(createPinia())

export default App
