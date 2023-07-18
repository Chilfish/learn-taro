export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/profile/profile',
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
        iconPath: 'assets/home.svg',
        selectedIconPath: 'assets/home.svg',
      },
      {
        pagePath: 'pages/profile/profile',
        text: 'Profile',
        iconPath: 'assets/profile.svg',
        selectedIconPath: 'assets/profile.svg',
      },
    ],
  },
})
