import React from 'react';
import { books } from './data';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
             <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/books" render={() => <Books books={books} />} />
                <Route path="/books/1" render={() => <BookInfo books={books} />} />
            </Routes>
            <Footer />
        </div>
    </Router>
    );
}

export default App;