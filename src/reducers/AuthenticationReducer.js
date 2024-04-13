import { AUTH_FAILED, AUTH_START, AUTH_SUCCESS, SESSION_DESTROY } from "../actions/Types";

const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  const AuthenticationReducer  = (state = initialState, action) => {
    switch(action.type){
      case AUTH_START:
        return{
            ...state,
            loading: true,
            error: null
          }
      case AUTH_SUCCESS:
        return{
            ...state,
            data: action.payload,
            loading: false,
            error: null
          }
        
      case AUTH_FAILED :
        return{
            ...state,
            loading: false,
            error: action.payload
          }
       case SESSION_DESTROY :
        return{
          ...state,
          loading:false,
          data:null
        }   
      default:  
        return state;
    }
  };
  export default AuthenticationReducer;