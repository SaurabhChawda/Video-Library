import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "../Reducers/userReducer";
import { useAuth } from "./Index";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const { authState } = useAuth();
  const [state, dispatch] = useReducer(Reducer, {
    watchLater: [],
    playList: [],
    currentVideo: [],
    history: [],
    likedVideo: [],
  });

  const AddToWatchLater = (video) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Add_to_WatchLater", payload: video });
      (async () => {
        try {
          const {
            data: { watchlater },
          } = await axios.post("/api/user/watchlater", { video }, { headers: { authorization: authState.token } });
          console.log(watchlater);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  const RemoveFromWatchLater = async (video) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Remove_From_WatchLater", payload: video });
      try {
        const {
          data: { watchlater },
        } = await axios.delete(`/api/user/watchlater/${video._id}`, { headers: { authorization: authState.token } });
        console.log(watchlater);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const AddToLikedVideo = (video) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Add_to_LikedVideo", payload: video });
      (async () => {
        try {
          const {
            data: { likes },
          } = await axios.post("/api/user/likes", { video }, { headers: { authorization: authState.token } });
          console.log(likes);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  const RemoveFromLikedVideo = (video) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Remove_From_LikedVideo", payload: video });
      (async () => {
        try {
          const {
            data: { likes },
          } = await axios.delete(`/api/user/likes/${video._id}`, { headers: { authorization: authState.token } });
          console.log(likes);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  const AddToHistory = (video) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Add_to_History", payload: video });
      (async () => {
        try {
          const {
            data: { history },
          } = await axios.post("/api/user/history", { video }, { headers: { authorization: authState.token } });
          console.log(history);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  const RemoveFromHistory = (video) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Remove_From_History", payload: video });
      (async () => {
        try {
          const {
            data: { history },
          } = await axios.delete(`/api/user/history/${video._id}`, { headers: { authorization: authState.token } });
          console.log(history);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  useEffect(() => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          const {
            data: { watchlater },
          } = await axios.get("/api/user/watchlater", { headers: { authorization: authState.token } });
          const {
            data: { likes },
          } = await axios.get("/api/user/likes", { headers: { authorization: authState.token } });
          const {
            data: { history },
          } = await axios.get("/api/user/history", { headers: { authorization: authState.token } });
          dispatch({ type: "Reset" });
          dispatch({ type: "Load_WatchLater_Data", payload: watchlater });
          dispatch({ type: "Load_LikedVideo_Data", payload: likes });
          dispatch({ type: "Load_History_Data", payload: history });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [authState]);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        AddToWatchLater,
        RemoveFromWatchLater,
        AddToLikedVideo,
        RemoveFromLikedVideo,
        AddToHistory,
        RemoveFromHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
