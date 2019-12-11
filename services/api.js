import axios from '~/plugins/axios'

export default {
  createPatient(newPatient, token) {
    axios
      .post('/patients', newPatient, { headers: token })
      .then(response => response.data)
  }
}
