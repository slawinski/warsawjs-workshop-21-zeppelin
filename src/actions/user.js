import api from '../utils/api'

const setUserProfile = userData => ({
  type: '',
  userData
})

export const login = ({username, password}) => async dispatch => {
  try {
    const user = await api.user.login({username, password})

    dispatch({
      type: '',
      userData: {username: user.username}
    })
  } catch (e) {
    console.log(e)
  }
}
