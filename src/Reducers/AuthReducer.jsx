export function Reducer(state, action) {
  switch (action.type) {
    case "SIGNUP":
    case "LOGIN":
      return { ...state, isUserLoggedIn: true, token: action.payload };
    case "LOGOUT":
      return { ...state, isUserLoggedIn: false, token: null };
    default:
      return state;
  }
}
