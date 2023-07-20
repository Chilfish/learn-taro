import { vant } from './vant'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/profile/profile',
    'pages/todo/todo',
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
    'van-tabbar': vant('tabbar'),
    'van-tabbar-item': vant('tabbar-item'),
    'van-cell': vant('cell'),
    'van-cell-group': vant('cell-group'),
    'van-field': vant('field'),
    'van-icon': vant('icon'),
    'van-button': vant('button'),
    'van-checkbox': vant('checkbox'),
  },
})
