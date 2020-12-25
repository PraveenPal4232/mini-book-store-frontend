import {useState} from "react";
import axios from "axios";

const LogIn = () => {
const [AuthUser, SetAuthUser] = useState({
      authEmail:"",
      authPassword:""
  });
  const [AlertStatus, SetAlertStatus] = useState(false);

      // Handel Auth Change
      const handleAuthChange = (e) => {
        SetAuthUser({...AuthUser,
          [e.target.name]: e.target.value,
        });
      };

      // Update Alert Status
      const updateAlertStatus = () => {
        SetAlertStatus(prevState => !prevState)
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
          .catch((err) => {
            console.log(err);
            SetAlertStatus(prevState => !prevState)
          });
          
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

            {
              AlertStatus ?
            <div className="alert error">Incorrect username or password.
            <span className="alert_close" title="Close Alert" onClick={updateAlertStatus}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/></svg>
            </span>
            </div>
            :
            <span>&nbsp;</span>
            }

            
        </main>
    )
}

export default LogIn;