import axios from '~/plugins/axios'

export default {
  createPatient(newPatient, token) {
    return axios
      .post('/patients', newPatient, { headers: { access_token: token } })
      .then(response => response.data)
  },
  getVolunteers(id) {
    return axios.get(`/volunteers/${id}`).then(res => res.data)
  },
  createService(newService, access_token) {
    return axios
      .post('/services', newService, {
        headers: { access_token }
      })
      .then(response => response.data)
  },
  updateUser(userId, newUser, access_token) {
    return axios
      .put(`/users/${userId}`, newUser, {
        headers: { access_token }
      })
      .then(response => response.data)
  },
  findVolunteers(dias, horario, access_token) {
    let url = `/volunteers/search?dias=${JSON.stringify(
      dias
    )}&horario=${JSON.stringify(horario)}`

    return axios
      .get(url, {
        headers: { access_token }
      })
      .then(response => response.data)
  }
}
