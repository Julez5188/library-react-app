import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book?.url} alt="" className="book__img" />
        </figure>
        console.log({book})
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span book__price--normal>${book.originalPrice.toFixed(2)}</span>$
            {book.salePrice.toFixed(2)}
          </>
        ) : (
          <>{book.originalPrice}</>
        )}
      </div>
    </div>
  );
};

export default Book;
