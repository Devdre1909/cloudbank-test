import React from "react";

const Card = ({ img, title, caption }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{caption}</p>
      </div>
    </div>
  );
};

export default Card;
