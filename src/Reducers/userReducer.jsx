export const Reducer = (state, action) => {
  switch (action.type) {
    case "Load_WatchLater_Data":
      return {
        ...state,
        watchLater: [...state.watchLater, ...action.payload],
      };
    case "Load_LikedVideo_Data":
      return {
        ...state,
        likedVideo: [...state.likedVideo, ...action.payload],
      };
    case "Load_History_Data":
      return {
        ...state,
        history: [...state.history, ...action.payload],
      };
    case "Add_to_CurrentVideo":
      return {
        ...state,
        currentVideo: [action.payload],
      };
    case "Add_to_WatchLater":
      return {
        ...state,
        watchLater: [...state.watchLater, action.payload],
      };
    case "Remove_From_WatchLater":
      return {
        ...state,
        watchLater: state.watchLater.filter((item) => item._id !== action.payload._id),
      };
    case "Add_to_PlayList":
      return {
        ...state,
        playList: [...state.playList, action.payload],
      };
    case "Remove_From_PlayList":
      return {
        ...state,
        playList: state.playList.filter((item) => item._id !== action.payload._id),
      };
    case "Add_to_LikedVideo":
      return {
        ...state,
        likedVideo: [...state.likedVideo, action.payload],
      };
    case "Remove_From_LikedVideo":
      return {
        ...state,
        likedVideo: state.likedVideo.filter((item) => item._id !== action.payload._id),
      };
    case "Add_to_History":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case "Remove_From_History":
      return {
        ...state,
        history: state.history.filter((item) => item._id !== action.payload._id),
      };
    case "Add_to_History":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case "Remove_From_History":
      return {
        ...state,
        history: state.history.filter((item) => item._id !== action.payload._id),
      };
    case "Reset":
      return {
        ...state,
        watchLater: [],
        likedVideo: [],
        history: [],
      };
    default:
      return action.payload;
  }
};
