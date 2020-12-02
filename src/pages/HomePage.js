import {useState, useEffect} from "react";
import axios from "axios";

import BookCard from '../components/BookCard'

const HomePage = () => {
    const [BookList, SetBookList] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);
    const [Test, SetTest] = useState("Praveen Pal");

    // Fetch books from server
    const fetchBooks = () => {
        axios
        .get("http://localhost:5000/books")
        .then((res) => {
          SetBookList(res.data);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {

        // Start Loading data from server
        SetIsLoading(true);

        // Fetch books from server
        fetchBooks();

        // Done Loading data from server
        SetIsLoading(false);

      },[]);

      console.log(BookList);
    

    return (
        <main>   
            <div className="books_warp">
                {
                    (IsLoading) ? 
                    <p>Loading data...</p> : BookList.map((book) => 
                    <BookCard
                    key={book._id}
                    id={book._id}
                    BookCover={book.cover}
                    BookName={book.name}
                    BookAuthor={book.author}
                    BookPrice={book.price}
                    />
                )   
                }
            </div>
        </main>
    )
}

export default HomePage;