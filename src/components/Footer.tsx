import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/hooks";

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
    <footer className="py-3 my-sm-4 border-top">
      <div className="container d-flex flex-wrap justify-content-center justify-content-sm-between flex-column flex-sm-row align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-md-0 me-2 text-body-secondary text-decoration-none lh-1"
          >
            <i className="bi bi-newspaper fs-4 me-3"></i>
          </Link>
          <span className="mb-md-0 text-body-secondary">
            &copy; 2023 Natalia Stelmach
          </span>
        </div>
        <div className="d-flex mt-3 m-sm-0">
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
