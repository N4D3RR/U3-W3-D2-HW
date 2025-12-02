import type { Article } from "./Article"

export interface ArticleList {
    "count": number
  "next": string
  "previous": string
  "results": Article[]
}