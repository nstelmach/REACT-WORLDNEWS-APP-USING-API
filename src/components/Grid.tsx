import clsx from "clsx";
import image from "../images/image-not-found.png";
import { Article } from "../types";
import styles from "./Grid.module.css";

type GridProps = {
  articles: Article[];
  getDataClickHandler: (
    content: string,
    author: string,
    url: string
  ) => () => void;
  isLoading: boolean;
};

function Grid({ articles, getDataClickHandler, isLoading }: GridProps) {
  const article = articles?.map((article: Article) => (
    <div
      className="col d-flex flex-wrap"
      style={{ cursor: "pointer", maxWidth: "400px" }}
      key={article.url}
      onClick={getDataClickHandler(
        article.content,
        article.author,
        article.url
      )}
    >
      <div className="card shadow-sm">
        {article.urlToImage ? (
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={article.urlToImage}
            alt="News"
          />
        ) : (
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={image}
            alt="Not Found"
          />
        )}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h2>{article.title ? article.title : "No title found"}</h2>
            <p className="card-text mt-4">
              {article.description
                ? article.description
                : "No description found"}
            </p>
            <p className="mb-0 mt-3 opacity-75 fs-6">
              Source:{" "}
              {article.source.name
                ? article.source.name
                : "No source name found"}
            </p>
          </div>
          <div className="text-body-secondary mt-4 text-end">
            {article.publishedAt
              ? article.publishedAt.replace("T", " ").slice(0, -4)
              : "No date found"}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className={clsx(
        "album py-5 bg-body-tertiary mx-5 w-100 mh-100 overflow-scroll",
        styles.wrapper
      )}
    >
      <div className={clsx("container px-5 ", styles.container)}>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border text-primary m-5"
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4 justify-content-center">
            {article}
          </div>
        )}
      </div>
    </div>
  );
}

export default Grid;
