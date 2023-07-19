import { vant } from './vant'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/profile/profile',
  ],

  subPackages: [
    {
      root: 'packages',
      pages: ['todo/todo'],
    },
  ],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },

  tabBar: {
    color: '#999999',
    selectedColor: '#9a9afa',
    backgroundColor: '#FCFCFC',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'Home',
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/home.png',
      },
      {
        pagePath: 'pages/profile/profile',
        text: 'Profile',
        iconPath: 'assets/profile.png',
        selectedIconPath: 'assets/profile.png',
      },
    ],
  },

  usingComponents: {
    'van-button': vant('button'),
  },
})
