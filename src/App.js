import './index.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Discounted from './components/Discounted';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights /> 
      <Features />
      <Discounted />
    </div>
  );
}

export default App;
