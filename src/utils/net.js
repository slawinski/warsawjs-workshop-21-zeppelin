class Net {
  constructor() {
    this.BASE_URL = process.env.API_BASE_URL || 'https://warsawjs-21-api.herokuapp.com'
  }

  get = ({ url }) => {
    return fetch(`${this.BASE_URL}/${url}/`)
      .then(res => res.json())
      .catch(error => error)
  }

  post = ({ url, data = {} }) => {
    return fetch(`${this.BASE_URL}/${url}/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .catch(error => error)
  }

  mock = ({ data }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1500)
    })
  }
}

export default new Net()
