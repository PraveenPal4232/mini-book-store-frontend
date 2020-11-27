import './App.css';
import Menu from './components/Menu'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import AddBookPage from './pages/AddBookPage'

function App() {
  return (
    <div className="App">
      <Menu />
     <HomePage />
     <BookPage />
     <AddBookPage />
     <Footer />
    </div>
  );
}

export default App;
