import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import EditBookPage from './pages/EditBookPage'
import AddBookPage from './pages/AddBookPage'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import EditUserPage from './pages/EditUserPage'
import LogIn from './pages/LogInPage'
import Register from './pages/RegisterPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/book/:id" exact component={BookPage} />
      <Route path="/book/edit/:id" exact component={EditBookPage} />
      <Route path="/add/book" exact component={AddBookPage} />
      <Route path="/welcome" exact component={Welcome} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/user/edit/" exact component={EditUserPage} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/register" exact component={Register} />
     </Router>
     <Footer />
    </div>
  );
}

export default App;
