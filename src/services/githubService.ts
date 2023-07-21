import { HttpClient } from '@ngify/http'
import { map } from 'rxjs/operators'
import type { GithubRepo } from '@/types'

// Github API，仅用于示例，需要在微信开发者工具中，在详情->本地设置中
// 开启 `开发环境不校验请求域名、TLS版本及HTTPS证书` 选项，来跳过对服务器域名的校验
// 否则，需要使用已备案的域名来反代 Github API
const api = 'https://api.github.com'

export class GithubService {
  private http: HttpClient

  constructor() {
    this.http = new HttpClient()
  }

  getRepos(input: string) {
    return this.http
      .get<{ items: GithubRepo[] }>(`${api}/search/repositories?q=${input}`)
      .pipe(
        map(res => res.items),
      )
  }
}
