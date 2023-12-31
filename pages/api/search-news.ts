import type { NextApiRequest, NextApiResponse } from "next";
import { NewsResponse } from "@/models/NewsArticles";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();

  if (!searchQuery) {
    return res.status(400).json({ error: "Please provide search query!" });
  }

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const newsResponse: NewsResponse = await response.json();

  res.status(200).json(newsResponse.articles);
}
