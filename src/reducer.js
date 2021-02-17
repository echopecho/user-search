export const initialState = {
  loading: false,
  currentPage: 1,
  userList: [],
  error: false,
  errorMsg: "",
};

export function reducer(state = initialState, action) {
  switch (action.key) {
    case "LOADING":
      break;

    default:
      return state;
  }
}
