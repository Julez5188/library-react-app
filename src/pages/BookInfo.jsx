import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Rating from '../components/Ui/Rating';
import Price from '../components/Ui/Price';

const BookInfo = ({ books, addToCart }) => {
    return (
h2id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" className="book__selected--img" />
                            </figure>
                        </div>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">Crack the Coding Interview</h2>
                            <Rating rating="4.5" />
                            <div className="book__selected--price">
                                <Price originalPrice={50} salePrice={25} />
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">
                                    Summary
                                </div>
                                <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, esse fuga culpa incidunt inventore dolore, sint iste modi qui quas ut fugit necessitatibus, tempora recusandae odio! Aliquid, dolorem illum. Tenetur.
                                </p>
                                 <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, esse fuga culpa incidunt inventore dolore, sint iste modi qui quas ut fugit necessitatibus, tempora recusandae odio! Aliquid, dolorem illum. Tenetur.
                                </p>
                            </div>
                            <button className="btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title-top">
                                Recommended Books
                            </h2>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;