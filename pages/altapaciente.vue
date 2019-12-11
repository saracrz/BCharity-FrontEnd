<template>
  <div>
    <div id="text">
      <p
        align="center"
        justify="center"
        class="subtitle-2 font-weight-regular mx-auto"
      >
        Nuevo paciente
      </p>
      <v-img height="250" :src="require('~/assets/persona-de-60.jpg')"></v-img>
      <v-card-title class="ml-2">
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="newPatient.name"
            color="#54CEC3"
            label="Nombre"
          >
          </v-text-field>
        </v-col>
      </v-card-title>

      <v-card-text>
        <v-col cols="12">
          <v-textarea
            v-model="newPatient.description"
            color="#54CEC3"
            label="Escribe una descripción"
            style="padding:0px"
            resize
            rows="3"
          ></v-textarea>
        </v-col>
      </v-card-text>

      <v-card-title class="subtitle-1">Disponibilidad:</v-card-title>
      <v-select
        id="selects"
        v-model="daysSelected"
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
        id="selects"
        v-model="timeSelected"
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
          color="#54CEC3"
          justify="align-center"
          class="mx-auto mr-8 my-6 white--text"
          @click="saveQuery()"
          >Ver Voluntarios</v-btn
        >
      </v-card-actions>
    </div>
  </div>
</template>

<script>
import API from '~/services/api'

export default {
  data: () => ({
    newPatient: {
      name: '',
      description: ''
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
    daysSelected: [],
    horarios: ['Mañana', 'Tarde'],
    timeSelected: []
  }),
  methods: {
    async saveQuery() {
      const token = this.$store.getters.getToken
      const response = await API.createPatient(this.newPatient, token)
      if (!response) {
        this.$store.commit('saveQuery', {
          daysSelected: this.daysSelected,
          timeSelected: this.timeSelected
        })
        this.$router.push('/searchvolunteers')
      } else {
        alert(response)
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
