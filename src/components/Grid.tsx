import { useQuery } from "react-query";
import { useState } from "react";
import PopUp from "./PopUp";
import image from "../images/image-not-found.png";
import { useLocation } from "react-router-dom";
import { navLinks } from "../NavLinks";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

function Grid() {
  const [isOpen, setIsOpen] = useState(false);
  const [articleData, setArticleData] = useState<null | {
    content: string | null;
    author: string | null;
    url: string | null;
  }>(null);

  const location = useLocation();

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

  const article = articles.map((article: any) => (
    <div
      className="col"
      key={article.url}
      onClick={getDataClickHandler(
        article.content,
        article.author,
        article.url
      )}
    >
      <div className="card shadow-sm">
        {article.urlToImage === null ? (
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={image}
            alt="Not Found"
          />
        ) : (
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={article.urlToImage}
            alt="News"
          />
        )}

        <div className="card-body">
          <h2>{article.title === null ? "No title found" : article.title}</h2>
          <p className="card-text mt-4">
            {article.description === null
              ? "No description found"
              : article.description}
          </p>
          <p className="mb-0 mt-3 opacity-75 fs-6">
            Source:{" "}
            {article.source.name === null
              ? "No source name found"
              : article.source.name}
          </p>

          <div className="text-body-secondary mt-4 text-end">
            {article.publishedAt === null
              ? "No date found"
              : article.publishedAt.replace("T", " ").slice(0, -1)}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className="album py-5 bg-body-tertiary flex-grow-1 mx-5"
      style={{ marginTop: "95px" }}
    >
      <div className="container px-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {article}
        </div>
      </div>
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

export default Grid;
