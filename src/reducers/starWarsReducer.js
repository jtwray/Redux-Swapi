import { FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],  
  fetching: false,
  error: null,
  // Array charac ters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch( action.type ) {
    case FETCHING: {
      // action types should be FETCHING, SUCCESS and FAILURE	   
      // your switch statement should handle all of these cases.	   
      console.log( action.payload )
      return {
          ...state,
          fetching: true,
        }
      }
      case SUCCESS: {
        return {
          ...state,
          fetching: false,
          error: null,
          characters: action.payload.results
        }
      }
      case FAILURE: {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
