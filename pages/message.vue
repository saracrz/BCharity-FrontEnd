<template>
  <div>
    <h3>Mensajes:</h3>
    <v-text-field>21 Octubre 2019</v-text-field>
    <p>
      Hola Carlos, cómo estás? Te escribo porque he visto tu perfil y me
      encantaría proponerte una colaboración. En concreto sería para mi padre,
      tengo dificultades para compaginar mi horario de trabajo con su ingreso en
      el hospital y pasa mucho tiempo solo. Espero tu respuesta. Muchas gracias
      por adelantado.
    </p>
  </div>
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
