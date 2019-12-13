import axios from '~/plugins/axios'

export default {
  createPatient(newPatient, token) {
    console.log('Pase por aqui')
    console.log({ newPatient })

    // axios
    //   .post('/patients', newPatient, { headers: token })
    //   .then(response => response.data)
    //   .catch(e => console.error(e)) // EXPEDIENTE X
    return axios
      .post('/patients', newPatient, { headers: { access_token: token } })
      .then(response => response.data)
  }
}
