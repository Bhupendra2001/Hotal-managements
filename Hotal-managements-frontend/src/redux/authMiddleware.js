

export default function authMiddleware(api) {
    return ({ dispatch }) => (next) => async (action) => {
      if (action.type === 'REGISTER') {
        const response = await api.register(action.payload)
        if (response.ok) {
          const data = await response.json()
          dispatch({ type: 'LOGIN_SUCCESS', payload: data })
        } else {
          const error = await response.text()
          dispatch({ type: 'REGISTER_ERROR', payload: error })
        }
      }
      return next(action)
    }
  }