import React, { useState } from 'react';
import { books } from './data';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    console.log('add to cart', book)
  }

  return (
    <Router>
        <div className="App">
            <Nav />
             <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/books" element={<Books books={books} />} />
                <Route path="/books/1" element={<BookInfo books={books} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart books={books} /> } />
            </Routes>
            <Footer />
        </div>
    </Router>
    );
}

export default App;