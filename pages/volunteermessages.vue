<template>
  <v-list three-line>
    <div>
      <p
        align="center"
        justify="center"
        class="subtitle-1 font-weight-medium mx-auto mb-4"
      >
        Mensajes
      </p>
      <v-divider class="mb-6"></v-divider>
    </div>
    <div v-if="items">
      <Message />
    </div>
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
