import "./index.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Nav />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
