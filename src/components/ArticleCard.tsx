import { Button, Card } from "react-bootstrap"
import { type Article } from "../types/Article"

interface Props {
  article: Article
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={article.image_url} alt={article.title} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {new Date(article.published_at).toLocaleDateString()}
        </Card.Text>
        <Card.Text>{article.summary.slice(0, 125)}...</Card.Text>

        <Button href={article.url} variant="primary">
          Read Article
        </Button>
      </Card.Body>
    </Card>
  )
}
export default ArticleCard
