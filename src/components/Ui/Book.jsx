import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import Price from "./Price";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <div className="book__price">
        <Price price={book.price } />
      </div>
    </div>
  );
};

export default Book;
