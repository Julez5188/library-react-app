import React, { useState } from 'react';
import { books } from './data';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
<<<<<<< HEAD

function App() {
=======
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart() {
    console.log("Add to cart");
  }

>>>>>>> ec2676fd9ba756ab88eb57382af035524c685c08
  return (
    <Router>
        <div className="App">
            <Nav />
             <Routes>
<<<<<<< HEAD
                <Route exact path="/" element={<Home />} />
                <Route path="/books" element={<Books books={books} />} />
                <Route path="/books/1" element={<BookInfo books={books} />} />
=======
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books books={books} />} />
                <Route exact path="/books/1" element={<BookInfo books={books} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart books={books} />} />
>>>>>>> ec2676fd9ba756ab88eb57382af035524c685c08
            </Routes>
            <Footer />
        </div>
    </Router>
    );
}

export default App;