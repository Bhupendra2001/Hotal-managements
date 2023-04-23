


export function login(email, password) {
return async (dispatch) => {
    // Make API request to validate user credentials
    const response = await fetch('http://localhost:3005/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      const data = await response.json()
      dispatch({ type: 'LOGIN_SUCCESS', payload: data })
    } else {
      const error = await response.text()
      dispatch({ type: 'LOGIN_ERROR', payload: error })
    }
  }
}

// export function logout() {
//     return async (dispatch) => {
//       // Make API request to log out user
//       const response = await fetch('http://localhost:3005/api/logout')
  
//       if (response.ok) {
//         dispatch({ type: 'LOGOUT_SUCCESS' })
//       } else {
//         const error = await response.text()
//         dispatch({ type: 'LOGOUT_ERROR', payload: error })
//       }
//     }
//   }
  
