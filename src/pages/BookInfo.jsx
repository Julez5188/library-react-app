import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Rating from '../components/Ui/Rating';
import Price from '../components/Ui/Price';

const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
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
                            <p className="book__selected--para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio eveniet vero debitis ad possimus soluta, dignissimos beatae illo laboriosam eaque magni ducimus eius veritatis fugiat aliquid ipsam in! Molestiae, blanditiis?</p>
                            <Rating rating="4.5" />
                            <div className="book__selected--price">
                                <Price originalPrice={50} salePrice={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;