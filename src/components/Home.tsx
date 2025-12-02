import { useEffect, useState } from "react"

import ArticleCard from "../components/ArticleCard"
import type { ArticleList } from "../types/ArticleList"
import { Col, Container, Row } from "react-bootstrap"
import type { Article } from "../types/Article"

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => res.json())
      .then((data: ArticleList) => {
        setArticles(data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.log("Errore fetch:", err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2 className="text-center mt-5">Loading articles...</h2>
  }

  return (
    <Container>
      <Row>
        {articles.map((article) => (
          <Col className="my-3" xs={6} md={4} lg={3} key={article.id}>
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
