import net from './net'

export default {
  user: {
    login: ({username, password}) => net.post({
      url: 'auth',
      data: {
        username,
        password
      }
    })
  }
}
