import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Destinations from './components/Destinations/Destinations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Category />
      <Destinations />
    </div>
  );
}

export default App;
