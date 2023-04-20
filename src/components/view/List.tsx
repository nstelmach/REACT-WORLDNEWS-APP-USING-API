import { Article } from "../../types/types";

type ListProps = {
  articles: Article[];
  getDataClickHandler: (
    content: string,
    author: string,
    url: string
  ) => () => void;
  isLoading: boolean;
};

function List({ articles, getDataClickHandler, isLoading }: ListProps) {
  const article = articles?.map((article: Article) => (
    <div
      key={article.url}
      className="list-group-item list-group-item-action d-flex gap-3"
      style={{ cursor: "pointer" }}
      onClick={getDataClickHandler(
        article.content,
        article.author,
        article.url
      )}
    >
      <div className="d-flex gap-2 w-100 justify-content-between flex-column flex-md-row">
        <div>
          <h6 className="mb-0 ">
            {article.title ? article.title : "No title found"}
          </h6>
          <p className="mb-0 mt-2 opacity-75">
            Source:{" "}
            {article.source.name ? article.source.name : "No source name found"}
          </p>
        </div>
        <small className="opacity-50 text-nowrap">
          {article.publishedAt
            ? article.publishedAt.replace("T", " ").slice(0, -4)
            : "No date found"}
        </small>
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 justify-content-center bg-body-tertiary mx-md-5 mx-3 w-100 mh-100">
      <div className="list-group overflow-scroll">
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
  );
}

export default List;
