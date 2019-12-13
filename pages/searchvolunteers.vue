<template>
  <div>
    <p class="subtitle-1 font-weight-regular mx-auto mt-2">
      Selecciona un voluntario
    </p>
    <Volunteer :volunteers="volunteers"></Volunteer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Volunteer from '@/components/Volunteer.vue'
export default {
  name: 'Searchvolunteer',
  components: {
    Volunteer
  },
  data: () => ({
    volunteers: []
  }),

  computed: {
    ...mapGetters(['getToken', 'getDaysSelected', 'getTimeSelected'])
  },
  mounted() {
    // obtener del store el token
    console.log(this.getToken)

    console.log(this.getDaysSelected)
    const dias = this.getDaysSelected /* days here */
    const horario = this.getTimeSelected /* days here */
    let url = `http://localhost:2222/api/volunteers/search?dias=${JSON.stringify(
      dias
    )}&horario=${JSON.stringify(horario)}`

    const headers = {
      access_token: this.getToken /* token here*/,
      'Access-Control-Allow-Origin': true
    }

    console.log(headers)

    this.$axios
      .get(url, {
        headers: headers,
        mode: 'cors'
      })
      .then(response => (this.volunteers = response.data))
      .catch(() => (this.volunteers = [{}]))
  }
}
</script>

<style lang="scss" scoped></style>
