<template>
  <v-list three-line>
    <Message v-for="(item, index) in items" :key="index" :service="item" />
  </v-list>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from '../plugins/axios'
import Message from '~/components/Message'

export default {
  components: { Message },
  data: () => ({
    items: {
      patient_Id: {},
      volunteer_Id: {
        dias: ''
      },
      message: '',
      horario: '',
      dias: ''
    }
  }),
  computed: {
    ...mapGetters(['getVolunteerData', 'getPacientData', 'getServiceData'])
  },
  created() {
    setTimeout(() => {
      console.log({ volunteer: this.getVolunteerData })
      axios
        .get(`/services/search?volunteer_Id=${this.getVolunteerData._id}`)
        .then(services => (this.items = services.data))
    }, 100)
  }
}
</script>

<style lang="scss" scoped></style>
