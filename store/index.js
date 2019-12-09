export const state = () => ({
  token: '',
  userName: '',
  email: ''
})

export const getters = {
  userName(state) {
    return state.userName
  }
}
export const mutations = {
  saveToken(state, { username, email, token }) {
    state.token = token
    state.username = username
    state.email = email
  },
  clearToken(state) {
    state.token = ''
    state.username = ''
    state.email = ''
  }
}
