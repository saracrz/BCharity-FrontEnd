<template>
  <div>
    <div id="text">
      <p class="subtitle-1 font-weight-regular mx-2">
        Nuevo paciente
      </p>
      <v-img height="250" :src="require('~/assets/persona-de-60.jpg')"></v-img>

      <v-card-title class="title ml-2">Alberto</v-card-title>
      <v-card-text>
        <v-col cols="12" sm="12">
          <v-textarea
            color="#54CEC3"
            label="Escribe una descripción"
            resize
            rows="2"
            :value="value"
          ></v-textarea>
        </v-col>
      </v-card-text>

      <v-card-title class="subtitle-1">Disponibilidad:</v-card-title>
      <v-select
        id="selects"
        v-model="daysSelected"
        class="mx-4 font-weight-thin"
        outlined
        :items="days"
        label="Selecciona los días"
        multiple
      >
        <template v-slot:selection="{ item, index }">
          <v-chip v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="grey--text caption"
            >(+{{ valor.length - 1 }} others)</span
          >
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
export default {
  data: () => ({
    rules: [v => v.length <= 150 || 'Max 150 characters'],
    value:
      'A Alberto le gusta hablar de cine , salir a dar un paseo, jugar a dominó y que le enseñen a utilizar nuevas tecnologías.',
    days: [
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
    saveQuery() {
      this.$store.commit('saveQuery', {
        daysSelected: this.daysSelected,
        timeSelected: this.timeSelected
      })
      this.$router.push('/searchvolunteers')
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
