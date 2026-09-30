import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Ui/Rating';

const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <div className="book__selected--top">
                                <Link to="/books" className="book__link">
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Link>
                                <Link to="/books" className="book__link">
                                    <h2 className="book__selected--title-top">Books</h2>
                                </Link>
                            </div>
                            <div className="book__selected">
                                <figure>
                                    <img src="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg" alt="" className="book__selected__img" />
                                </figure>
                                <h2 className="book__selected--title">Atomic Habits</h2>
                                <Rating rating="4.5" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;