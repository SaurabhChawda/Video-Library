export const Reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return action.payload;
  }
};
