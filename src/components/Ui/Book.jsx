import React from "react";
<<<<<<< HEAD
import Rating from "./Rating";
=======
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";
>>>>>>> ec2676fd9ba756ab88eb57382af035524c685c08

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
<<<<<<< HEAD
        </a>
      </div>
      <Rating rating={book.rating} />
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>$
            {book.salePrice.toFixed(2)}
          </>
        ) : (
          <>{book.originalPrice.toFixed(2)}</>
        )}
      </div>
=======
        </Link>
      </div>
     <Rating rating={book.rating} />
      <div className="book__price">
       <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
       </div>
>>>>>>> ec2676fd9ba756ab88eb57382af035524c685c08
    </div>
  );
};

export default Book;
