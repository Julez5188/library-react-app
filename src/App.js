import React from 'react';
import { books } from './data';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books books={books} />} />
                <Route exact path="/books/1" element={<BookInfo books={books} />} />
                <Route path="/cart" element={<Cart books={books} />} />
            </Routes>
            <Footer />
        </div>
    </Router>
    );
}

export default App;