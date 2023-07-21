export interface TabBar {
  name: string
  text: string
  icon: string
  url: string
}

export interface Todo {
  id: string
  content: string
  completed: boolean
}

export interface GithubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  language?: string
  stargazers_count: number
  forks_count: number
  open_issues: number
  owner: {
    login: string
    avatar_url: string
  }
}

export type reqState = 'idle' | 'loading' | 'success' | 'error' | 'notFound'
