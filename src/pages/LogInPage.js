import {useState} from "react";
import axios from "axios";

const LogIn = () => {
const [AuthUser, SetAuthUser] = useState({
      authEmail:"",
      authPassword:""
  });

      // Handel Auth Change
      const handleAuthChange = (e) => {
        SetAuthUser({...AuthUser,
          [e.target.name]: e.target.value,
        });
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
          .then((res) => {
          console.log(res.data);
          localStorage.setItem("userId", res.data.id);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("isAuthor", res.data.isAuthor);
          window.location.href = "/";
        })
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
            <p className="form_link">Don't have an account? <a href="/register">Register</a></p>

                </div>
            </div>
        </main>
    )
}

export default LogIn;