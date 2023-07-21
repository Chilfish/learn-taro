import { setupConfig } from '@ngify/http'
import { HttpWxBackend } from '@ngify/http/wx'

/**
 * 使用微信小程序的 wx.request 作为请求后端
 */
export function setupServices() {
  setupConfig({
    backend: new HttpWxBackend(),
  })
}
