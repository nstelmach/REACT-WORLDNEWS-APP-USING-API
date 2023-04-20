import { useState } from "react";
import PopUp from "./popup/PopUp";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/hooks";
import { toggle } from "../redux/features/articlesViewSlice";
import { useAppSelector } from "../redux/hooks/hooks";

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
    <header className="d-flex justify-content-center py-3 border-bottom bg-white mb-4">
      <div className="container d-flex flex-column flex-sm-row flex-wrap justify-content-center justify-content-sm-between align-items-center max-vw-100 mx-4 mx-md-0">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 m-sm-0 me-md-auto text-dark text-decoration-none"
        >
          <i className="bi bi-newspaper fs-4 me-3"></i>
          <span className="fs-4">worldNews</span>
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
              and works properly. A nice experience was also using and
              displaying data from the API. I was also very satisfied with the
              fact that the technologies that I had the pleasure to use for the
              first time, after reading the documentation, work efficiently. The
              biggest difficulty for me was writing tests and using redux,
              because I did it for the first time, but after reading the
              documentation, everything worked smoothly.
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
