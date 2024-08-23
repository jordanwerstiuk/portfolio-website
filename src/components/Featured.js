import React from "react";
import { Link } from "react-router-dom";

function Featured(props) {
  return (
    <>
      <li className="featured">
        <Link className="featured_link" to={props.path}>
          <figure className="featured_pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Project Image" className="featured_img" />
          </figure>
          <div className="featured_info">
            <h5 className="featured_text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Featured;
