import { NewsArticle } from "@/models/NewsArticles";
import { Card } from "react-bootstrap";
import Image from "next/image";
import placeholderImg from "@/assets/image/newarticle.png";
import styles from "@/styles/NewsArticleEntry.module.css";

interface NewsArticleEntryProps {
  article: NewsArticle;
}

const NewsArticleEntry = ({
  article: { title, description, url, urlToImage },
}: NewsArticleEntryProps) => {
  const validImgUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;
  return (
    <a href={url}>
      <Card className="h-100">
        {/* <Card.Img variant="top" src={validImgUrl} /> */}
        <Image
          src={validImgUrl || placeholderImg}
          width={500}
          height={200}
          alt="News article Image"
          className={`card-img-top ${styles.image}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewsArticleEntry;
