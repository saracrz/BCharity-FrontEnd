<template>
  <div>
    <p
      align="center"
      justify="center"
      class="subtitle-1 font-weight-regular mt-2 mx-auto"
    >
      Selecciona un voluntario
    </p>
    <Volunteer :volunteers="volunteers"></Volunteer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Volunteer from '@/components/Volunteer.vue'
import API from '~/services/api'

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
  async mounted() {
    this.volunteers = await API.findVolunteers(
      this.getDaysSelected,
      this.getTimeSelected,
      this.getToken
    )
  }
}
</script>

<style lang="scss" scoped></style>
