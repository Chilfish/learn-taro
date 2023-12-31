export interface Tab {
  text: string
  url: string
}

export interface TabBar extends Tab {
  name: string
  icon: string
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

interface ModelValues {
  name: string
  price: string
  img?: string
}

interface GoodsModel {
  name: string
  values: ModelValues[]
}

export interface Goods {
  id: string
  name: string
  price: number
  cover_url: string
  imgs: string[]
  category: string
  description?: string
  model: GoodsModel[]
}

export interface GoodsPopup {
  show: boolean
  type: 'model' | 'address'
}
