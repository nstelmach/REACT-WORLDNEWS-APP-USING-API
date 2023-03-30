import List from "./List";
import Grid from "./Grid";
import { useAppSelector } from "../hooks";
import { useQuery } from "react-query";
import { useState } from "react";
import PopUp from "./PopUp";
import { useLocation } from "react-router-dom";
import { navLinks } from "../NavLinks";
import { useAppDispatch } from "../hooks";
import { getArticlesNumber } from "../features/articlesNumberSlice";
import { Article } from "../types";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

function MainContent() {
  const isGridView = useAppSelector((state) => state.articlesView.isGridView);

  const [isOpen, setIsOpen] = useState(false);
  const [articleData, setArticleData] = useState<null | {
    content: string | null;
    author: string | null;
    url: string | null;
  }>(null);

  const location = useLocation();

  const dispatch = useAppDispatch();

  const link = navLinks.find((obj) => {
    if (location.pathname === "/") {
      return obj.name === "Poland";
    } else {
      return obj.name === location.pathname.split("/")[2]?.replace("%20", " ");
    }
  });

  const hideModal = () => {
    setIsOpen(false);
  };

  const getDataClickHandler =
    (content: string, author: string, url: string) => () => {
      setIsOpen(true);
      setArticleData({ content: content, author: author, url: url });
    };

  type NewsResponse = {
    status: string;
    totalResults: number;
    articles: Article[];
  };

  const getNews = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${link?.APIcode}&apiKey=${API_KEY}`
    );
    return res.json() as Promise<NewsResponse>;
  };

  const { data, error, isLoading } = useQuery(
    ["news", link?.APIcode],
    getNews,
    {
      onSuccess: (data) => {
        dispatch(getArticlesNumber(data?.articles.length));
      },
    }
  );

  if (error) return <div>Request Failed</div>;

  let articles = data?.articles;

  return (
    <>
      {isGridView ? (
        <Grid
          articles={articles || []}
          getDataClickHandler={getDataClickHandler}
          isLoading={isLoading}
        />
      ) : (
        <List
          articles={articles || []}
          getDataClickHandler={getDataClickHandler}
          isLoading={isLoading}
        />
      )}
      <PopUp hideModal={hideModal} isOpen={isOpen}>
        {articleData?.content ? articleData.content : "No content found"}
        <p className="mb-0 mt-3 opacity-75">
          Author: {articleData?.author ? articleData.author : "No author found"}
        </p>
        <div className="mb-0 mt-2 opacity-75">
          Source:
          <a href={articleData?.url || undefined} className="ms-1 text-break">
            {articleData?.url ? articleData.url : "No source found"}
          </a>
        </div>
      </PopUp>
    </>
  );
}

export default MainContent;
