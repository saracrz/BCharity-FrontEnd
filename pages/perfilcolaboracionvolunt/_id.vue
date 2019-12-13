<template>
  <div>
    <p
      align="center"
      justify="center"
      class="subtitle-2 font-weight-regular mx-2 mt-2"
    >
      Propón una colaboración
    </p>
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
          placeholder="Deja un mensaje al voluntario"
          resize
          rows="2"
          :value="value"
        ></v-textarea>
      </v-col>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        id="button-voluntarios"
        center
        color="#54CEC3"
        justify="align-center"
        class="mx-auto mr-8 my-2 white--text"
        @click="createService()"
        >Proponer Colaboración</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '~/plugins/axios'
export default {
  data() {
    return {
      newService: {
        message: '',
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
  created() {
    axios
      .get('http://localhost:2222/api/volunteers/' + this.$route.params.id)
      .then(res => res.data)
      .then(volunteer => (this.volunteer = volunteer))
  },
  methods: {
    createService() {
      this.newService.dias = this.getDaysSelected
      this.newService.horario = this.getTimeSelected
      this.newService.volunteer_Id = this.$route.params.id
      this.newService.patient_Id = this.getPacientData._id
      axios
        .post('/services', this.newService, {
          headers: { access_token: this.getToken }
        })
        .then(response => response.data)
        .then(service => {
          console.log({ service })
          this.$store.commit('saveService', service)
          this.$router.push('/volunteermessages')
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
