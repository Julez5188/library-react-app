import React from 'react';
import { books } from './data';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from './pages/Books';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/books" render={() => <Books books={books} />} />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}

export default App;