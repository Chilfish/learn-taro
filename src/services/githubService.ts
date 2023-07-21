import { HttpClient, setupConfig } from '@ngify/http'
import { HttpWxBackend } from '@ngify/http/wx'
import { map } from 'rxjs/operators'
import type { GithubRepo } from '@/types'

const api = 'https://api.github.com'

setupConfig({
  backend: new HttpWxBackend(),
})

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
