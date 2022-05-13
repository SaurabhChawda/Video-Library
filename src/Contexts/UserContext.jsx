import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "../Reducers/userReducer";
import { useAuth } from "./Index";
import { toast } from "react-toastify";
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
        } catch (err) {
          toast.error("Failed to Add");
        }
      })();
    } else {
      toast.success("Kindly Login");
    }
  };
  const RemoveFromWatchLater = async (video) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Remove_From_WatchLater", payload: video });
      try {
        const {
          data: { watchlater },
        } = await axios.delete(`/api/user/watchlater/${video._id}`, { headers: { authorization: authState.token } });
      } catch (err) {
        toast.error("Failed to Remove");
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
        } catch (err) {
          toast.error("Failed to Add");
        }
      })();
    } else {
      toast.success("Kindly Login");
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
        } catch (err) {
          toast.error("Failed to Remove");
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
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  const RemoveAllVideoFromHistory = () => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Remove_All_Video_From_History" });
      (async () => {
        try {
          const {
            data: { history },
          } = await axios.delete(`/api/user/history/all`, { headers: { authorization: authState.token } });
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  const CreatePlaylist = (PlayListTitle) => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          const {
            data: { playlists },
          } = await axios.post(
            "/api/user/playlists",
            {
              playlist: { title: PlayListTitle, description: "PlayList" },
            },
            { headers: { authorization: authState.token } }
          );
          dispatch({ type: "Create_PlayList", payload: playlists });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  const DeletePlaylist = (playList) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Delete_PlayList", payload: playList });
      (async () => {
        try {
          const {
            data: { playlists },
          } = await axios.delete(`/api/user/playlists/${playList._id}`, {
            headers: { authorization: authState.token },
          });
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  const AddVideoToPlayList = (playList, video) => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          const {
            data: { playlist },
          } = await axios.post(
            `/api/user/playlists/${playList._id}`,
            {
              video,
            },
            { headers: { authorization: authState.token } }
          );
          dispatch({ type: "Add_Video_To_PlayList", payload: playlist });
          toast.success("PlayList Updated");
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      toast.success("Kindly Login");
    }
  };
  const DeleteVideoFromPlayList = (playList, video) => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          const {
            data: { playlist },
          } = await axios.delete(`/api/user/playlists/${playList._id}/${video._id}`, {
            headers: { authorization: authState.token },
          });
          dispatch({ type: "Delete_Video_From_PlayList", payload: playlist });
        } catch (error) {
          console.log(error);
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
          const {
            data: { playlists },
          } = await axios.get("/api/user/playlists", { headers: { authorization: authState.token } });
          dispatch({ type: "Reset" });
          dispatch({ type: "Load_WatchLater_Data", payload: watchlater });
          dispatch({ type: "Load_LikedVideo_Data", payload: likes });
          dispatch({ type: "Load_History_Data", payload: history });
          dispatch({ type: "Load_PlayList_Data", payload: playlists });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [authState]);

  console.log(state.playList);
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
        CreatePlaylist,
        DeletePlaylist,
        AddVideoToPlayList,
        DeleteVideoFromPlayList,
        RemoveAllVideoFromHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
