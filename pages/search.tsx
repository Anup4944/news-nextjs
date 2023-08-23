import { NewsArticle } from "@/models/NewsArticles";
import { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { FormEvent } from "react";
import NewsArticleGrid from "@/components/NewsArticleGrid";
import Head from "next/head";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );

  const [searchResultLoading, setSearchResultLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      try {
        setSearchResults(null);
        setIsError(false);
        setSearchResultLoading(true);

        const response = await fetch("/api/search-news?q=" + searchQuery);

        const articles: NewsArticle[] = await response.json();

        setSearchResults(articles);
      } catch (error) {
        console.log(error);
        setSearchResultLoading(true);
      } finally {
        setSearchResultLoading(false);
      }
    }
  }
  return (
    <>
      <Head>
        <title key="title">Search News</title>
      </Head>
      <main>
        <h1>Search Page</h1>
        <Alert>
          This is page uses <strong>client-side data fetching</strong> to show
          fresh data for every search. Requests are handled by our backend via{" "}
          <strong>API routes</strong>.
        </Alert>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Search Query</Form.Label>
            <Form.Control
              name="searchQuery"
              placeholder="Eg: Politics, Sports, Health, ....."
            />
          </Form.Group>
          <Button type="submit" className="mb-3" disabled={searchResultLoading}>
            Search
          </Button>
        </Form>

        <div className="d-flex flex-column align-items-center">
          {searchResultLoading && <Spinner animation="border" />}
          {isError && <p>Something went wrong. Please try again</p>}
          {searchResults?.length === 0 && (
            <p>Nothing found. Try different query.</p>
          )}

          {searchResults && <NewsArticleGrid article={searchResults} />}
        </div>
      </main>
    </>
  );
};

export default SearchPage;
