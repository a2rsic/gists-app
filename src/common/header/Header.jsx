import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2 className="header-title">Gists App</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
