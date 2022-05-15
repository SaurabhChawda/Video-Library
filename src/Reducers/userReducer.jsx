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
    case "Load_PlayList_Data":
      return {
        ...state,
        playList: [...state.playList, ...action.payload],
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
    case "Create_PlayList":
      return {
        ...state,
        playList: action.payload,
      };
    case "Delete_PlayList":
      return {
        ...state,
        playList: state.playList.filter((item) => item._id !== action.payload._id),
      };
    case "Add_Video_To_PlayList":
      return {
        ...state,
        playList: state.playList.map((item) => (item._id === action.payload._id ? action.payload : item)),
      };
    case "Delete_Video_From_PlayList":
      return {
        ...state,
        playList: state.playList.map((item) => (item._id === action.payload._id ? action.payload : item)),
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
    case "Remove_All_Video_From_History":
      return {
        ...state,
        history: [],
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
