import {useState} from "react";
import axios from "axios";

const Welcome = () => {
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
        const formData = new FormData();
        formData.append('name',User.name);
        formData.append('email',User.email);
        formData.append('price',User.password);
        formData.append('summary',User.bio);
        formData.append('profile',User.profile);
        formData.append('isAuthor',User.isAuthor);
        formData.append('myBooks',User.myBooks);
        formData.append('wishlist',User.wishlist);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
    
        axios
          .post(
            `http://localhost:5000/users/register`, formData, config
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

      };

    return (
        <main>
            <div className="User_page add_User_page">
                <div className="add_User_warp">
                <h1 className="page_heading">Register New User</h1>
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

export default Welcome;