import { LOADING, SUCCESS, FAILURE, SEARCH, PAGINATE } from "./util/dispatch-types";

export const initialState = {
  loading: false,
  currentPage: 1,
  userList: [],
  error: false,
  errorMsg: "",
  query: "",
  total_count: 0
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
        userList: action.payload.userList,
        total_count: action.payload.total_count
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
        total_count: 0,
        currentPage: 1
      };
    case SEARCH:
      return {
        ...state,
        query: action.payload,
        currentPage: 1
      }
    case PAGINATE:
      return {
        ...state,
        currentPage: state.currentPage + action.payload
      }
    default:
      return state;
  }
}
