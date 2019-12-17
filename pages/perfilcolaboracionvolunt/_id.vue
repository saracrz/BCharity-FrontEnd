<template>
  <div>
    <v-col cols="12">
      <v-avatar
        color="#54CEC3"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
      Propón una colaboración
    </v-col>
    <v-img height="300" :src="volunteer.photoURL"></v-img>

    <v-card-title class="mb-0"> {{ volunteer.name }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>
      <div color="#54CEC3" class="subtitle-2 mb-4 ">
        {{ volunteer.lugar }}
      </div>
      <p>
        {{ volunteer.description }}
        {{ volunteer.experience }}
      </p>
    </v-card-text>

    <v-card-text>
      <v-col cols="12" sm="12">
        <v-textarea
          v-model="newService.message"
          color="#54CEC3"
          label="Mensaje"
          placeholder=""
          resize
          rows="6"
          :value="value"
        ></v-textarea>
      </v-col>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        id="button-voluntarios"
        center
        rounded
        color="#54CEC3"
        align="center"
        justify="align-center"
        class="mx-auto mr-12 my-2 white--text"
        @click="createService()"
        >Proponer Colaboración</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import API from '~/services/api'

export default {
  data() {
    return {
      step: '3',
      newService: {
        message:
          'Hola! ¿cómo estás? Te escribo porque me gustaría proponerte una colaboración. En concreto sería para mi padre, tengo dificultades para compaginar mi horario de trabajo con su ingreso en el hospital y pasa mucho tiempo solo. Muchas gracias por adelantado.',
        dias: [],
        horario: [],
        volunteer_Id: '',
        patient_Id: ''
      },
      dialog: false,
      value: '',
      volunteer: {
        dias: '',
        description: '',
        photoURL: '',
        lugar: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUserID',
      'userName',
      'getToken',
      'getDaysSelected',
      'getTimeSelected',
      'getPacientData'
    ])
  },
  async created() {
    await API.getVolunteers(this.$route.params.id).then(
      volunteer => (this.volunteer = volunteer)
    )
  },
  methods: {
    async createService() {
      this.newService.dias = this.getDaysSelected
      this.newService.horario = this.getTimeSelected
      this.newService.volunteer_Id = this.$route.params.id
      this.newService.patient_Id = this.getPacientData._id

      await API.createService(this.newService, this.getToken).then(service => {
        this.$store.commit('saveService', service)
        this.$router.push('/confirmationcolaboration')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#button-voluntarios {
  width: 300px;
  align-content: center;
}
</style>
