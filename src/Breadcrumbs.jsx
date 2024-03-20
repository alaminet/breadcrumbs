import React from "react";
import Chevron from "./IoChevronForward";
import "./breadcrumbs.css";
import FaHome from "./FaHome";

const Breadcrumbs = ({ className, separatorIcon, homeIcon, classNameText }) => {
  const bread = window.location.pathname.split("/");

  return (
    <>
      <div className={`flex items-center gap-1 ${className}`}>
        {(homeIcon && homeIcon) || <FaHome />}
        {bread.slice(1).length > 1 &&
          bread.slice(1).map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              {(separatorIcon && separatorIcon) || <Chevron />}
              <p className={classNameText}>{item}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Breadcrumbs;
