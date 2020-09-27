import React, { useState } from "react";

import Loader from "../../common/loader/Loader";

import "./GistItem.scss";

const GistItem = ({ gist, loading }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const { owner, files } = gist;

  let file = Object.keys(files)[0];

  if (loading) {
    return <Loader />;
  }

  const changeItemStyle = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setIsAnimation(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <div>
      <ul className="item-container">
        <li>
          <a href="#" onClick={changeItemStyle}>
            <div className={`item${isClicked ? " animation" : ""}`}>
              <img
                className={isAnimation ? "darken" : ""}
                src={owner.avatar_url}
                alt="img"
              />
              <span className={isAnimation ? `clicked` : ""}>{file}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default GistItem;
