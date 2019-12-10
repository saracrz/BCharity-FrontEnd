export const state = () => ({
  token: '',
  userName: '',
  email: '',
  daysSelected: [],
  timeSelected: []
})

export const getters = {
  userName(state) {
    return state.userName
  },
  getToken(state) {
    return state.token
  },
  getDaysSelected(state) {
    return state.daysSelected
  },
  getTimeSelected(state) {
    return state.timeSelected
  }
}
export const mutations = {
  saveToken(state, { username, email, token }) {
    state.token = token
    state.userName = username
    state.email = email
  },
  saveQuery(state, { daysSelected, timeSelected }) {
    console.log('paso por aki')

    state.daysSelected = daysSelected
    state.timeSelected = timeSelected
  },
  clearToken(state) {
    state.token = ''
    state.userName = ''
    state.email = ''
  }
}
