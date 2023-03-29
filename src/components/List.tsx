import { useQuery } from "react-query";
import { useState } from "react";
import PopUp from "./PopUp";
import { useLocation } from "react-router-dom";
import { navLinks } from "../NavLinks";
import { useAppDispatch } from "../hooks";
import { getArticlesNumber } from "../features/articlesNumberSlice";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

function List() {
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

  const getNews = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${link?.APIcode}&apiKey=${API_KEY}`
    );
    return res.json();
  };

  const { data, error, isLoading } = useQuery(["news", link?.APIcode], getNews);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  let articles = data.articles;

  let articlesLength = data.articles.length;

  dispatch(getArticlesNumber(articlesLength));

  const article = articles.map((article: any) => (
    <div
      key={article.url}
      className="list-group-item list-group-item-action d-flex gap-3 py-3"
      aria-current="true"
      onClick={getDataClickHandler(
        article.content,
        article.author,
        article.url
      )}
    >
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 className="mb-0 ">
            {article.title === null ? "No title found" : article.title}
          </h6>
          <p className="mb-0 mt-2 opacity-75">
            Source:{" "}
            {article.source.name === null
              ? "No source name found"
              : article.source.name}
          </p>
        </div>
        <small className="opacity-50 text-nowrap">
          {article.publishedAt === null
            ? "No date found"
            : article.publishedAt.replace("T", " ").slice(0, -1)}
        </small>
      </div>
    </div>
  ));

  return (
    <div
      className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 justify-content-center flex-grow-1 bg-body-tertiary mx-5"
      style={{ marginTop: "95px" }}
    >
      <div className="list-group">{article}</div>
      <PopUp
        hideModal={hideModal}
        isOpen={isOpen}
        content={articleData?.content || undefined}
        author={articleData?.author || undefined}
        url={articleData?.url || undefined}
      />
    </div>
  );
}

export default List;
