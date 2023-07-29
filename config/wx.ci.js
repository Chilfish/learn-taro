const process = require('node:process')
const path = require('node:path')
const { open } = require('node:fs/promises')
const { Project, packNpm, preview } = require('miniprogram-ci')

require('dotenv').config()

const { appid } = process.env

async function getPrivateKey() {
  const keyFile = await open(path.resolve(__dirname, '..', 'private.wx.key'), 'r')
  const privateKey = await keyFile.readFile('utf-8')
  return privateKey.trim()
}

;(async () => {
  let privateKey = ''
  try {
    privateKey = await getPrivateKey()
  }
  catch (error) {
    console.error('ERROR: Please put your private.wx.key file in the root directory of the project')
    process.exit(1)
  }

  const project = new Project({
    appid,
    privateKey,
    projectPath: path.resolve(__dirname, '..', 'dist'),
    ignores: ['node_modules/**/*'],
  })

  await packNpm(project, {
    ignores: ['pack_npm_ignore_list'],
    reporter: (infos) => { console.log(infos) },
  })

  // taro 的 production 版本已经压缩过了，不需要再压缩
  await preview({
    project,
    desc: `${new Date().toLocaleString()} preview}`,
    qrcodeFormat: 'image',
    qrcodeOutputDest: `${process.cwd()}/previewQR.jpg`,
  })
})()
