import { defineStore } from 'pinia'
import Taro from '@tarojs/taro'

export const useInstanceStore = defineStore('taro-instance', () => {
  const instance = Taro.getCurrentInstance()

  return {
    instance,
  }
})
