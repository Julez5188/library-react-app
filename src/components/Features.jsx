import React from "react";
import Book from "./Ui/Book";
import { books } from "../data";

const Features = () => {
  console.log(books);
  console.log();
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="orange">Books</span>
          </h2>
          <div className="books">
            {books
            .filter(book => book.rating === 5)
            .slice(0,4)
            .map((book) => {
              <Book book={book} key={book.id}/>
            })}
            
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
