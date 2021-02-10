import {useState, useEffect} from "react";
import axios from "axios";

const EditUserPge = () => {
    const [User, SetUser] = useState({
        name:"",
        email:"",
        password:"",
        bio:"",
        profile:null,
        isAuthor:false,
        myBooks:[],
        wishlist:[],
    });
    const [IsLoading, SetIsLoading] = useState(false);

    // Fetch user from server
    const fetchUser = () => {
        const uID = localStorage.getItem('userId');
        axios
        .get(`https://mini-book-store-backend.herokuapp.com/users/${uID}`)
        .then((res) => {
          SetUser(res.data);
          //console.log(res.data);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {

        // Start Loading data from server
        SetIsLoading(true);

        // Fetch books from server
        fetchUser();

        // Done Loading data from server
        SetIsLoading(false);

      },[]);

      // Handel Input Change
      const handleChange = (e) => {
        SetUser({...User,
          [e.target.name]: e.target.value,
        });
      };

      // Handel Input Change
      const handleFileChange = (e) => {
        SetUser({...User,
          [e.target.name]: e.target.files[0],
        });
      };

      // Update User to server
      const handleSubmit = (e) => {
        e.preventDefault();

        const userId = localStorage.getItem('userId');
        const userToken = localStorage.getItem('token');

        const formData = new FormData();
        formData.append('name',User.name);
        formData.append('email',User.email);
        formData.append('password',User.password);
        formData.append('bio',User.bio);
        formData.append('profile',User.profile);
        formData.append('isAuthor',User.isAuthor);
        for(var x = 0; x < User.myBooks.length; x++) {
          formData.append('myBooks', User.myBooks[x])
        }
        for(var y = 0; y < User.wishlist.length; y++) {
          formData.append('wishlist', User.wishlist[y])
        }
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `token ${userToken}`
            }
        };
    
        axios
          .post(
            `https://mini-book-store-backend.herokuapp.com/users/update/${userId}`, formData, config
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

      };


    return (
        <main>
            <div className="User_page add_User_page">
                <div className="add_User_warp">

                <h1 className="page_heading">Edit User</h1>
                <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="User Name"
                  required
                  onChange={handleChange}
                  value={User.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  value={User.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  required
                  onChange={handleChange}
                  value={User.password}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  type="text"
                  className="form-control form-control-textarea"
                  id="bio"
                  name="bio"
                  placeholder="Your Bio"
                  required
                  onChange={handleChange}
                  value={User.bio}
                />
              </div>

              <div className="form-group">
                <label htmlFor="profile">User Profile</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="profile"
                  name="profile"
                  required
                  onChange={handleFileChange}
                />
              </div>


              <button type="submit" className="btn btn-dark">
              Register User
              </button>
            </form>
                </div>
            </div>
        </main>
    )
}

export default EditUserPge;