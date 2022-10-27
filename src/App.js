import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Destinations from './components/Destinations/Destinations';
import NextTrip from './components/NextTrip/NextTrip';
import Testimonials from './components/Testimonials/Testimonials';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Category />
      <Destinations />
      <NextTrip />
      <Testimonials />
      <Subscribe />
    </div>
  );
}

export default App;
