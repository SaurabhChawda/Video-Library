import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Reducer } from "../Reducers/AuthReducer";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(Reducer, { isUserLoggedIn: false, token: null });

  //User SignUp//
  const signUpCredentials = async (newUser) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        address: newUser.address,
        contact: newUser.contact,
        password: newUser.password,
      });
      localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: data.encodedToken }));
      authDispatch({ type: "SIGNUP", payload: data.encodedToken });
      navigate("/");
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error("Failed to Signup");
    }
  };

  //User Login

  const loginCredentials = async (user) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: user.username,
        password: user.password,
      });
      localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: data.encodedToken }));
      authDispatch({ type: "LOGIN", payload: data.encodedToken });
      {
        state ? navigate(state.from.pathname) : navigate("/");
      }
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error("Failed to Login");
    }
  };

  //User Logout

  const logoutCredentials = () => {
    try {
      localStorage?.removeItem("login");
      authDispatch({ type: "LOGOUT" });
      navigate("/", { replace: true });
      toast.success("Logged Out Successfully");
    } catch (error) {
      toast.error("Failed to LogOut");
    }
  };

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));
    login && authDispatch({ type: "LOGIN", payload: login.token });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch, signUpCredentials, loginCredentials, logoutCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
