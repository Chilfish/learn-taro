My learning for [Taro]

在 [/start branch] 维护 Taro + Vue3 的启动模板

main 分支使用的是 [vant weapp] 组件，因此仅支持微信小程序

使用 pnpm@8，`pnpm dev` 与 `pnpm build`，Node.js 18

为了压缩生成的代码以能通过 miniprogram-ci 来上传预览，需要使用 `set NODE_ENV=production && pnpm dev` 或 `$env:NODE_ENV="production"; pnpm dev` 来运行

[Taro]: https://github.com/nervjs/taro
[/start branch]: https://github.com/Chilfish/taro-learn/tree/start
[vant weapp]: https://vant-contrib.gitee.io/vant-weapp/#/home
