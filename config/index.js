import ComponentsPlugin from 'unplugin-vue-components/webpack'

const path = require('node:path')
const process = require('node:process')

const root = path.resolve(__dirname, '..')
const vantDist = path.resolve(root, 'node_modules/@vant/weapp/dist')

const config = {
  projectName: 'taro-learn',
  date: '2023-7-18',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    '@': path.resolve(root, 'src'),
  },
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {},
  copy: {
    patterns: [
      {
        from: vantDist,
        to: 'dist/components/@vant/',
      },
    ],
    options: {},
  },
  framework: 'vue3',
  compiler: 'webpack5',
  // cache: {
  //   enable: true, // 不要开启缓存，还没解决配置文件的缓存一致性问题，导致修改配置文件后，不生效
  // },
  mini: {
    hot: true,
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    // 合并webpack配置
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          dts: 'src/types/components.d.ts',
        }),
      )
    },
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development')
    return merge({}, config, require('./dev'))

  return merge({}, config, require('./prod'))
}
