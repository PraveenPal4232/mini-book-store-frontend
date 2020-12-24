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
    const [Wishlist, SetWishlist] = useState([]);
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

    // Fetch user from server
    const fetchUser = () => {
        const uID = localStorage.getItem('userId');
        axios
        .get(`http://localhost:5000/users/${uID}`)
        .then((res) => {
            SetWishlist(res.data.wishlist);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {

        // Start Loading data from server
        SetIsLoading(true);

        // Fetch books from server
        fetchBook();

        // Fetch user from server
        fetchUser();

        // Done Loading data from server
        SetIsLoading(false);

      },[]);

      // Wishlist Status
      const wishlistStatus = () => {
        let newWishlist;
        if(Wishlist.includes(id)){
          newWishlist = Wishlist.filter(item => item !== id);
        }
        else{
          newWishlist = [...Wishlist, id];
        }
      
      SetWishlist(newWishlist)
      SetWishlist((state) => {
      //console.log(state)

      const userId = localStorage.getItem('userId');
      const userToken = localStorage.getItem('token');

      const formData = new FormData();
      for(var x = 0; x < state.length; x++) {
        formData.append('wishlist', state[x])
      }
      const config = {
          headers: {
            'content-type': 'multipart/form-data',
            'Authorization': `token ${userToken}`
          }
      };
  
      axios
        .put(
          `http://localhost:5000/users/wishlist/${userId}`, formData, config
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

          return state;
      })
      };


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
                    <div>
                    <h3>By {Book.author}</h3>
                    <h1>{Book.name}</h1>
                    <h4>{Book.price}</h4>
                    <p className="book_summary">{Book.summary}</p>
                    {
                        Wishlist.includes(id) ?
                        <button className="btn btn-dark add_to_wishlist" onClick={wishlistStatus}>Remove from Wishlist</button>
                        :
                        <button className="btn btn-dark add_to_wishlist" onClick={wishlistStatus}>Add to Wishlist</button>
                    }
                    
                    {/* <a href={`./edit/${id}`} className="book_edit" >Edit Book</a> */}
                    </div>
                    </div>
                    
                </div>
}
            </div>
        </main>
    )
}

export default BookPage;