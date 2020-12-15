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

    const [AuthUser, SetAuthUser] = useState({
      authEmail:"",
      authPassword:""
  });

      // Handel Input Change
      const handleChange = (e) => {
        SetUser({...User,
          [e.target.name]: e.target.value,
        });
      };

      // Handel Auth Change
      const handleAuthChange = (e) => {
        SetAuthUser({...AuthUser,
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
        formData.append('password',User.password);
        formData.append('bio',User.bio);
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
            `http://localhost:5000/users/login`, formData, config
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

      };


      // Login AutUser to server
      const handleAuthSubmit = (e) => {
        e.preventDefault();
        
        const logInUser = {
          email:AuthUser.authEmail,
          password:AuthUser.authPassword
        }
    
        axios
          .post(
            `http://localhost:5000/users/login`, logInUser
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

      };

    return (
        <main>
            <div className="User_page add_User_page">
                <div className="add_User_warp">

                <h1 className="page_heading">LogIn User</h1>
                <form onSubmit={handleAuthSubmit}>

              <div className="form-group">
                <label htmlFor="authEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="authEmail"
                  name="authEmail"
                  placeholder="Email Address"
                  required
                  onChange={handleAuthChange}
                  value={AuthUser.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="authPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="authPassword"
                  name="authPassword"
                  placeholder="Your Password"
                  required
                  onChange={handleAuthChange}
                  value={AuthUser.password}
                />
              </div>


              <button type="submit" className="btn btn-dark">
              Login User
              </button>
            </form>

            <br />
            <br />

            {/* Divider */}

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