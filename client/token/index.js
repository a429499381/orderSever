import store from "../src/store"

export const getToken = () => {
  const localToken = localStorage.getItem('token')
  const token = store.state.token || localToken
   return token
}

export const remove = (key = 'token') => {
  localStorage.removeItem(key)
  store.state.token = ''
}