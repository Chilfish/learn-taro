import { useVant } from './vant'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/profile/profile',
    'pages/todo/todo',
    'pages/github/github',
    'pages/shopping/shopping',
  ],

  subPackages: [],

  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#1E4273',
    backgroundColor: '#ffffff',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
      },
      {
        text: '我的',
        pagePath: 'pages/profile/profile',
      },
    ],
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },

  usingComponents: {
    ...useVant(
      'tabbar',
      'tabbar-item',
      'cell',
      'cell-group',
      'field',
      'icon',
      'button',
      'checkbox',
    ),
  },
})
