<template>
  <v-card class="mx-auto mt-8" max-width="344">
    <v-card-text>
      <div>Mensaje de Alberto:</div>
      <p>21 Octubre 2019</p>
      <p class=" text--primary">
        Hola Carlos, cómo estás? Te escribo porque he visto tu perfil y me
        encantaría proponerte una colaboración. En concreto sería para mi padre,
        tengo dificultades para compaginar mi horario de trabajo con su ingreso
        en el hospital y pasa mucho tiempo solo. Espero tu respuesta. Muchas
        gracias por adelantado.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn text to="welcome" color="deep-purple accent-4">
        Aceptar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    items: {
      patient_Id: '',
      volunteer_Id: '',
      message: '',
      horario: '',
      dias: '',
      fecha: '13/Dic'
    }
  }),
  computed: {
    ...mapGetters(['getVolunteerData', 'getPacientData'])
  }
}
</script>

<style lang="scss" scoped></style>
