<template>
  <div>
    <v-col cols="12">
      <v-avatar
        color="#54CEC3"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
      Da de alta a un paciente
    </v-col>
    <div id="text">
      <v-img
        class="mt-4"
        height="250"
        :src="require('~/static/persona-de-60.jpg')"
      ></v-img>
      <v-card-title class="ml-0" style="padding-bottom:0px; margin-bottom: 0px">
        <v-col cols="12">
          <v-text-field
            v-model="newPatient.name"
            outlined
            class="subtitle-1"
            color="#54CEC3"
            label="Nombre"
            placeholder="Alberto"
          >
          </v-text-field>
          <v-textarea
            v-model="newPatient.description"
            outlined
            class="subtitle-1 font-weight-regular "
            color="#54CEC3"
            label="Escribe una descripción"
            style="padding: 0px"
            resize
            rows="3"
            placeholder="A Alberto le gusta hablar de cine , salir a dar un paseo, jugar a dominó y que le enseñen a utilizar nuevas tecnologías."
          ></v-textarea>
        </v-col>
      </v-card-title>

      <v-card-title class="subtitle-1 font-weight-regular ml-2"
        >Selecciona tu disponibilidad:</v-card-title
      >
      <v-col cols="12">
        <v-select
          id="selects"
          v-model="newPatient.dias"
          class="mx-4 font-weight-thin"
          outlined
          :items="dias"
          label="Selecciona los días"
          multiple
        >
          <template v-slot:selection="{ item }">
            <v-chip>
              <span>{{ item }}</span>
            </v-chip>
          </template>
        </v-select>
        <v-select
          id="selects2"
          v-model="newPatient.horario"
          :items="horarios"
          label="Horario"
          outlined
          class="mx-4 my-0 pt-0"
        ></v-select>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            id="button-voluntarios"
            center
            rounded
            color="#54CEC3"
            justify="align-center"
            class="mx-auto mr-10 my-6 white--text"
            @click="saveQuery()"
            >Ver Voluntarios</v-btn
          >
        </v-card-actions>
      </v-col>
    </div>
  </div>
</template>

<script>
import API from '~/services/api'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    step: '1',
    newPatient: {
      name: 'Alberto',
      description:
        'A Alberto le gusta hablar de cine , salir a dar un paseo, jugar a dominó y que le enseñen a utilizar nuevas tecnologías.',
      horario: [],
      dias: [],
      userId: ''
    },

    value:
      'A Alberto le gusta hablar de cine , salir a dar un paseo, jugar a dominó y que le enseñen a utilizar nuevas tecnologías.',
    dias: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],

    horarios: ['Mañana', 'Tarde']
  }),
  computed: {
    ...mapGetters(['getUserID'])
  },
  methods: {
    async saveQuery() {
      const token = this.$store.getters.getToken
      console.log(this.daysSelected)
      this.newPatient.userId = this.getUserID

      const response = await API.createPatient(this.newPatient, token)
      if (!response.error) {
        this.$store.commit('saveQuery', {
          daysSelected: this.newPatient.dias,
          timeSelected: this.newPatient.horario
        })
        this.$store.commit('savePacientData', response)
        this.$router.push('/searchvolunteers')
      } else {
        console.error(response.error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#button-voluntarios {
  width: 300px;
  align-content: center;
}
#text {
  font-family: 'Lato', sans-serif;
}
#selects {
  display: flexbox;
}
</style>
