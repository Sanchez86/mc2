import {
  REMOVE_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "../actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        items: [
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
          ...state.items,
        ],
      };
    case TOGGLE_TODO:
      console.log("Test");
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todos;
