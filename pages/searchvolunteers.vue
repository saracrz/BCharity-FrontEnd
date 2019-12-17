<template>
  <div>
    <v-col cols="12">
      <v-avatar
        color="#54CEC3"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
      Selecciona un voluntario
    </v-col>
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
    step: '2',
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
