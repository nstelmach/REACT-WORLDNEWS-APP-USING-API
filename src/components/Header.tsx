import { useState } from "react";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { toggle } from "../features/articlesViewSlice";

function Header() {
  const [isActiveIcon, setIsActiveIcon] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const changeViewHandler = () => {
    setIsActiveIcon((state) => !state);
    dispatch(toggle());
  };

  return (
    <header className="fixed-top py-3 border-bottom bg-white">
      <div className="container d-flex flex-wrap justify-content-center">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
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
              title="Hardships and fun"
              body="lallala"
            />
          </li>

          <li className="nav-item">
            <button
              type="button"
              className="btn btn btn-outline-primary mx-3"
              onClick={changeViewHandler}
            >
              {isActiveIcon ? (
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
