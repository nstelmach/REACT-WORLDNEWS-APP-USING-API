import { useState } from "react";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { toggle } from "../features/articlesViewSlice";
import { useAppSelector } from "../hooks";
import clsx from "clsx";
import styles from "./Header.module.css";

function Header() {
  const isGridView = useAppSelector((state) => state.articlesView.isGridView);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const changeViewHandler = () => {
    dispatch(toggle());
  };

  return (
    <header className={clsx("py-3 border-bottom bg-white mb-4", styles.header)}>
      <div
        className={clsx(
          "container d-flex flex-wrap justify-content-center",
          styles.container
        )}
      >
        <Link
          to="/"
          className={clsx(
            "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none",
            styles.logo
          )}
        >
          <i className="bi bi-newspaper fs-4 me-3"></i>
          <span className="fs-4">gnNews</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary mx-3"
              onClick={showModal}
            >
              About
            </button>
            <PopUp
              hideModal={hideModal}
              isOpen={isOpen}
              title="Difficulties and fun"
            >
              What gave me the most pleasure was the fact that I can create a
              new project in exactly the technologies in which I intend to
              develop as a frontend developer. It was fun to be able to combine
              all these tools into one whole so that everything works together
              and works properly. A nice discovery was also using Bootstrap to
              style components and using and displaying data from the API. I was
              also very satisfied with the fact that the technologies that I had
              the pleasure to use for the first time, after reading the
              documentation, work efficiently. The biggest difficulty for me was
              writing tests and using redux, because I did it for the first
              time, but after reading the documentation, everything worked
              smoothly.
            </PopUp>
          </li>

          <li className="nav-item">
            <button
              type="button"
              className="btn btn btn-outline-primary mx-3"
              onClick={changeViewHandler}
            >
              {isGridView ? (
                <i className="bi bi-list"></i>
              ) : (
                <i className="bi bi-grid"></i>
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
