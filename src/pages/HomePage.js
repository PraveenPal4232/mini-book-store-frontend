import {useState, useEffect} from "react";
import axios from "axios";

import BookCard from '../components/BookCard'

const HomePage = () => {
    const [BookList, SetBookList] = useState([]);
    const [Wishlist, SetWishlist] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);

    const userId = localStorage.getItem('userId');
    const userToken = localStorage.getItem('token');

    // Fetch books from server
    const fetchBooks = () => {
        axios
        .get("https://mini-book-store-backend.herokuapp.com/books")
        .then((res) => {
          SetBookList(res.data);
        })
        .catch((err) => console.log(err));
    }

    // Fetch user from server
    const fetchUser = () => {
        const uID = localStorage.getItem('userId');
        axios
        .get(`https://mini-book-store-backend.herokuapp.com/users/${uID}`)
        .then((res) => {
            SetWishlist(res.data.wishlist);
        })
        .catch((err) => console.log(err));
    }


    useEffect(() => {

        // Start Loading data from server
        SetIsLoading(true);

        // Fetch books from server
        fetchBooks();

        // Fetch user from server
        if(userId !== null){
          fetchUser();
        }
        else{
          // Do something
        }
        

        // Done Loading data from server
        SetIsLoading(false);

      },[]);

      // Wishlist Status
      const wishlistStatus = (id) => {
        let newWishlist;
        if(userId === null){
          window.location.href = "/login";
        }
        else{
        if(Wishlist.includes(id)){
          newWishlist = Wishlist.filter(item => item !== id);
        }
        else{
          newWishlist = [...Wishlist, id];
        }
      
      SetWishlist(newWishlist)
      SetWishlist((state) => {
      //console.log(state)

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
          `https://mini-book-store-backend.herokuapp.com/users/wishlist/${userId}`, formData, config
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

          return state;
      })
    }
      };

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
                    wishlist={Wishlist.includes(book._id)}
                    action={wishlistStatus}
                    />
                )   
                }
            </div>
        </main>
    )
}

export default HomePage;