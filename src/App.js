import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Category />
    </div>
  );
}

export default App;
