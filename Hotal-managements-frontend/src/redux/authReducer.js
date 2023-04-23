

const initialState = {
    isAuthenticated: false,
    username: null,
    email: null,
  }

  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          isAuthenticated: true,
          username: action.payload.username,
          email: action.payload.email,
        }
      case 'LOGOUT_SUCCESS':
        return initialState
      default:
        return state
    }
  }