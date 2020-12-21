import {useState, useEffect} from "react";
import axios from "axios";
import {
    useParams
  } from "react-router-dom";

const BookPage = () => {
    const [Book, SetBook] = useState({
        id:"",
        name:"",
        author:"",
        price:"",
        summary:"",
        cover:""
    });
    const [IsLoading, SetIsLoading] = useState(false);
    let { id } = useParams();

    // Fetch book from server
    const fetchBook = () => {
        axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => {
          SetBook(res.data);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {

        // Start Loading data from server
        SetIsLoading(true);

        // Fetch books from server
        fetchBook();

        // Done Loading data from server
        SetIsLoading(false);

      },[]);

    return (
        <main>
            <div className="book_page">
            {
                    (IsLoading) ? 
                    <p>Loading data...</p> : 
                <div className="book_warp">
                    <div className="book_image_box">
                    <img 
                    src={`http://localhost:5000/${Book.cover}`}
                    alt={Book.name}
                    title={Book.name} />
                    </div>
                    <div className="book_content">
                    <h3>By {Book.author}</h3>
                    <h1>{Book.name}</h1>
                    <h4>{Book.price}</h4>
                    <p className="book_summary">{Book.summary}</p>
                    <button className="btn btn-dark add_to_wishlist">Add to Wishlist</button>
                    {/* <a href={`./edit/${id}`} className="book_edit" >Edit Book</a> */}
                    </div>
                    
                </div>
}
            </div>
        </main>
    )
}

export default BookPage;