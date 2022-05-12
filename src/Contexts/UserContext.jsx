import { createContext, useContext, useReducer } from "react";
import { Reducer } from "../Reducers/userReducer";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    watchLater: [],
    playList: [],
    history: [],
    currentVideo: [],
    likedVideo: [],
  });

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
