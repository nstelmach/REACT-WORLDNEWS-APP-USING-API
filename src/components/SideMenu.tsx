import { navLinks } from "../NavLinks";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./SideMenu.module.css";

function SideMenu() {
  const [isExpandedMenu, setIsExpandedMenu] = useState(false);

  function onMenuClick() {
    setIsExpandedMenu((state) => !state);
  }

  let menuWidth = isExpandedMenu ? "250px" : "88px";
  let iconSize = isExpandedMenu ? "16px" : "24px";

  const countryList = navLinks.map((navLinks) => (
    <li key={navLinks.APIcode}>
      <Link
        to={`country/${navLinks.name}`}
        className={clsx(
          "nav-link link-dark d-flex flex-row align-items-center my-2 gap-2",
          isExpandedMenu ? "justify-content-start" : "justify-content-center",
          styles.link
        )}
      >
        <navLinks.icon title={`${navLinks.name}`} style={{ width: iconSize }} />
        {isExpandedMenu && navLinks.name}
      </Link>
    </li>
  ));
  return (
    <div
      className={clsx(
        "d-flex flex-column flex-shrink-0 p-3 bg-light mh-100 overflow-scroll",
        isExpandedMenu && styles.menu
      )}
      style={{ width: menuWidth }}
    >
      <div
        className={clsx(
          "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none w-100",
          !isExpandedMenu && "justify-content-center",
          styles.title
        )}
      >
        {isExpandedMenu && <i className="bi bi-newspaper fs-4 me-3"></i>}
        {isExpandedMenu && <h2 className="fs-4">Menu</h2>}
        <button
          type="button"
          className={clsx(
            `btn btn-outline-primary`,
            isExpandedMenu && "ms-auto",
            styles.button
          )}
          onClick={onMenuClick}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">{countryList}</ul>
    </div>
  );
}

export default SideMenu;
