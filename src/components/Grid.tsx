import image from "../images/image-not-found.png";
import { Article } from "../types";

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
  const article = articles?.map((article: any) => (
    <div
      className="col d-flex flex-wrap"
      style={{ cursor: "pointer" }}
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
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
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
          </div>
          <div className="text-body-secondary mt-4 text-end">
            {article.publishedAt === null
              ? "No date found"
              : article.publishedAt.replace("T", " ").slice(0, -4)}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="album py-5 bg-body-tertiary mx-5 w-100 mh-100 overflow-scroll">
      <div className="container px-5 ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 ">
          {isLoading ? (
            <div
              className="spinner-border text-primary m-5"
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            article
          )}
        </div>
      </div>
    </div>
  );
}

export default Grid;
