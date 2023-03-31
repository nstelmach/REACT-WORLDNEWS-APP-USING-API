import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import clsx from "clsx";
import styles from "./Footer.module.css";

function Footer() {
  var [date, setDate] = useState(new Date());

  const articlesNumber = useAppSelector((state) => state.articlesNumber.value);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <footer className={clsx("py-3 my-4 border-top", styles.footer)}>
      <div
        className={clsx(
          "container d-flex flex-wrap justify-content-between align-items-center",
          styles.container
        )}
      >
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className={clsx(
              "mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1",
              styles.margin
            )}
          >
            <i className="bi bi-newspaper fs-4 me-3"></i>
          </Link>
          <span
            className={clsx("mb-3 mb-md-0 text-body-secondary", styles.margin)}
          >
            &copy; 2023 Natalia Stelmach
          </span>
        </div>
        <div className={clsx("d-flex ", styles.timeWrapper)}>
          <div className="text-body-secondary ms-4">
            Articles: {articlesNumber}
          </div>
          <div className="text-body-secondary ms-4">
            {date.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
