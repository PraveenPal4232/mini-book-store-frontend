import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import AddBookPage from './pages/AddBookPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/book/:id" component={BookPage} />
      <Route path="/add/:id" component={AddBookPage} />
     </Router>
     <Footer />
    </div>
  );
}

export default App;
