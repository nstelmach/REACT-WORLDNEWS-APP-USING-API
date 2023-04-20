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

  //let menuWidth = isExpandedMenu ? "250px" : "88px";
  let iconSize = isExpandedMenu ? "16px" : "24px";

  const countryList = navLinks.map((navLinks) => (
    <li key={navLinks.APIcode}>
      <Link
        to={`country/${navLinks.name}`}
        className={clsx(
          "nav-link link-dark d-flex flex-row align-items-center my-2 gap-2 justify-content-center",
          isExpandedMenu
            ? "justify-content-sm-start"
            : "justify-content-sm-center"
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
        "d-flex flex-column flex-shrink-0 p-1 p-sm-3 bg-light mh-100 overflow-scroll ",
        isExpandedMenu && "p-3 p-sm-0",
        isExpandedMenu && styles.menu
      )}
    >
      <div
        className={clsx(
          "d-flex align-items-center me-md-auto link-dark text-decoration-none w-100 px-1 px-sm-3",
          !isExpandedMenu && "justify-content-center"
        )}
      >
        {isExpandedMenu && <i className="bi bi-newspaper fs-4 me-3"></i>}
        {isExpandedMenu && <h2 className="fs-4 me-sm-3">Menu</h2>}
        <button
          type="button"
          className={clsx(
            `btn btn-outline-primary `,
            isExpandedMenu && "ms-auto ",
            !isExpandedMenu && "mt-3 mt-sm-0"
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
