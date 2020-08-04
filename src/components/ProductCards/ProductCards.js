import React from "react";
import "./ProductCards.scss";

const ProductCards = ({ name, description, image }) => {
  return (
    <div className="cards">
      <img src={image} alt="product image" className="cards__image"/>
      <div className="cards__container">
        <h1 className="cards__container__title">{name.toUpperCase()}</h1>
        <h5 className="cards__container__description">{description}</h5>
      </div>
    </div>
  );
};

export default ProductCards;
