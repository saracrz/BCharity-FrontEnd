export const state = () => ({
  token: '',
  user: {},
  daysSelected: [],
  timeSelected: [],
  pacientData: {},
  volunteerData: {}
})

export const getters = {
  userName(state) {
    return state.user.name
  },
  getToken(state) {
    return state.token
  },
  getRole(state) {
    return state.user.role
  },
  getPacientData(state) {
    return state.pacientData
  },
  getVolunteerData(state) {
    return state.volunteerData
  },
  getUserID(state) {
    return state.user._id
  },
  getDaysSelected(state) {
    return state.daysSelected
  },
  getTimeSelected(state) {
    return state.timeSelected
  },
  getServiceData(state) {
    return state.service
  }
}
export const mutations = {
  saveUser(state, { token, user, pacientData, volunteerData }) {
    state.token = token
    state.user = user
    if (pacientData) {
      state.pacientData = pacientData
    }
    if (volunteerData) {
      state.volunteerData = volunteerData
    }
  },
  saveQuery(state, { daysSelected, timeSelected }) {
    console.log('paso por aki')

    state.daysSelected = daysSelected
    console.log(state.daysSelected)

    state.timeSelected = timeSelected
  },
  clearToken(state) {
    state.token = ''
    state.user = {}
  },
  savePacientData(state, pacient) {
    console.log({ pacient })
    state.pacientData = pacient
  },
  saveService(state, service) {
    console.log({ service })
    state.service
  }
}
