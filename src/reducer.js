import { LOADING, SUCCESS, FAILURE } from "./util/dispatch-types";

export const initialState = {
  loading: false,
  currentPage: 1,
  userList: [],
  error: false,
  errorMsg: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        userList: [],
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userList: action.payload,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
}
