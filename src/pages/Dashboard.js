import {useState, useEffect} from "react";
import axios from "axios";

const Dashboard = () => {
    const [User, SetUser] = useState({
      wishlist:[]
    });
    const [Wishlist, SetWishlist] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);

    // Fetch user from server
    const fetchUser = () => {
        const uID = localStorage.getItem('userId');
        axios
        .get(`http://localhost:5000/users/${uID}`)
        .then((res) => {
          SetUser(res.data);
        })
        .catch((err) => console.log(err));
    }

    // Fetch Wishlist from server
    const fetchWishlist = () => {
      axios
      .get(`http://localhost:5000/books/`)
      .then((res) => {
        SetWishlist(res.data);
      })
      .catch((err) => console.log(err));
  }

    useEffect(() => {

        // Start Loading data from server
        SetIsLoading(true);

        // Fetch user from server
        fetchUser();

        // Fetch Wishlist from server
        fetchWishlist();

        // Done Loading data from server
        SetIsLoading(false);

      },[]);

    return (
        <div className="book_page user_dashboard">
                <div className="user_dashboard_warp">
                  <h1 className="page_heading">User Dashboard</h1>
                  <img src={`http://localhost:5000/${User.profile}`} alt={User.name} title={User.name} className="user_profile" />
                  <br />
                 <p>Name : {User.name}</p>
                 <p>Email : {User.email}</p>
                 <p>Bio : {User.bio}</p>
                 <p>Wishlist :</p>
          <ul>
            {
            Wishlist.filter( book => User.wishlist.includes(book._id)).map(book => <li key={book.name}>{book.name}</li> )
            }
          </ul>
        </div>
      </div>
                  
    )
}

export default Dashboard;