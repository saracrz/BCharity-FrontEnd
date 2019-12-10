<template>
  <div>
    <p class="subtitle-1 font-weight-regular mx-2 mt-2">
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

    // this.getToken = this.$store.commit('saveToken', newToken.data)

    // obtener del store la consulta que se quería hacer

    const dias = [this.getDaysSelected] /*  los dias here*/
    const horario = [this.getTimeSelected] /*  los dias here*/
    let url = `http://localhost:2222/api/volunteers/search?dias=["${dias}"]&horario=["${horario}"]`

    this.$axios
      .get(url, {
        headers: {
          access_token: this.getToken /*  token here*/
        }
      })
      .then(response => (this.volunteers = response.data))
      .catch(() => (this.volunteers = [{}]))
  }
}
</script>

<style lang="scss" scoped></style>
