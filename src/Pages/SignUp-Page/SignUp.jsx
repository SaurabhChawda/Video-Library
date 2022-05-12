import "./signUp.css";
import { useState } from "react";
import { Nav, NavForTab, Sidebar } from "../../components/Index";
import { useAuth } from "../../Contexts/Index";
import { NavLink } from "react-router-dom";
export function SignUp() {
  const { signUpCredentials } = useAuth();
  const [showpassword, setShowPassword] = useState("password");
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const newUserHandler = (event) => {
    return setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const submitHandler = (event, newUser) => {
    event.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      signUpCredentials(newUser);
    } else {
      console.log("Incorrect Password");
    }
  };
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <NavForTab />
      <Sidebar />
      <main className="main--container">
        <section className="signup--container">
          <div className="signup">
            <div className="signup--header">
              <h1 className="signup__title">Sign-Up</h1>
            </div>
            <form className="signup-form">
              <div className="signup-form--username-wrapper">
                <fieldset className="signup-form__fieldset">
                  <legend className="signup-form__legend signup-form--username" htmlFor="userName">
                    <b>FirstName</b>
                  </legend>
                  <input
                    className="signup-form__input-demo signup-form__input--username"
                    type="text"
                    placeholder="Firstname"
                    required
                    name="firstName"
                    onChange={(e) => newUserHandler(e)}
                  />
                </fieldset>

                <fieldset className="signup-form__fieldset">
                  <legend className="signup-form__legend signup-form--lastname" htmlFor="userName">
                    <b>LastName</b>
                  </legend>
                  <input
                    className="signup-form__input-demo signup-form__input--username"
                    type="text"
                    placeholder="Lastname"
                    required
                    name="lastName"
                    onChange={(e) => newUserHandler(e)}
                  />
                </fieldset>
              </div>
              <fieldset className="signup-form__fieldset">
                <legend className="signup-form__legend signup-form--gmail" htmlFor="userGmail">
                  <b>Email Address</b>
                </legend>
                <input
                  className="signup-form__input-demo signup-form__input--usergmail"
                  type="email"
                  placeholder="discover@gmail.com"
                  name="email"
                  required
                  onChange={(e) => newUserHandler(e)}
                />
              </fieldset>
              <fieldset className="signup-form__fieldset">
                <legend className="signup-form__legend signup-form--address" htmlFor="address">
                  <b>Address</b>
                </legend>
                <input
                  className="signup-form__input-demo"
                  type="address"
                  placeholder="Enter Address"
                  name="address"
                  required
                  onChange={(e) => newUserHandler(e)}
                />
              </fieldset>
              <fieldset className="signup-form__fieldset">
                <legend className="signup-form__legend signup-form--contact" htmlFor="contact">
                  <b>Contact</b>
                </legend>
                <input
                  className="signup-form__input-demo signup-form__input--contact"
                  type="number"
                  placeholder="Contact Number"
                  required
                  name="contact"
                  onChange={(e) => newUserHandler(e)}
                />
              </fieldset>
              <div className="signup-form--user-password-wrapper">
                <fieldset className="signup-form__fieldset">
                  <legend className="signup-form__legend signup-form--password" htmlFor="password">
                    <b>Password</b>
                  </legend>
                  <input
                    className="signup-form__input-demo signup-form__input--password-first"
                    type={showpassword}
                    placeholder="Enter Password"
                    name="password"
                    required
                    onChange={(e) => newUserHandler(e)}
                  />
                </fieldset>
                <fieldset className="signup-form__fieldset signup-form--password-wrapper">
                  <legend className="signup-form__legend signup-form--password" htmlFor="password">
                    <b>Confirm Password</b>
                  </legend>
                  <input
                    className="signup-form__input-demo signup-form__input--password-second"
                    type={showpassword}
                    placeholder="confirm Password"
                    name="confirmPassword"
                    required
                    onChange={(e) => newUserHandler(e)}
                  />
                  <i className="signup-form__input--password-hide-icon">
                    <img
                      src={
                        showpassword === "password"
                          ? "/assets/image/SignUp/eyeHide.png"
                          : "/assets/image/SignUp/eyeShow.png"
                      }
                      alt="Show Password"
                      onClick={() => setShowPassword(showpassword === "password" ? "text" : "password")}
                    />
                  </i>
                </fieldset>
              </div>
              <div className="signup-form--submit">
                <button className="signup-form__btn--submit" onClick={(event) => submitHandler(event, newUser)}>
                  Submit
                </button>
              </div>
              <div className="signup-form--new-account">
                <small className="signup-form__btn--new-account signup-form__btn--new-account-text">
                  Already have an Account ?
                </small>
                <NavLink className="signup-form__btn--new-account" to="/login/">
                  Login
                </NavLink>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
