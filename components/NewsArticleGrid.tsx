import { NewsArticle } from "@/models/NewsArticles";
import { Row, Col } from "react-bootstrap";
import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticleGridProps {
  article: NewsArticle[];
}

const NewsArticleGrid = ({ article }: NewsArticleGridProps) => {
  return (
    <Row xs={1} sm={2} xl={3} className="g-4">
      {article.map((item) => (
        <Col key={item.url}>
          <NewsArticleEntry article={item} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsArticleGrid;
