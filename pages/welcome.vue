<template>
  <v-row id="welcome" align="center" justify="center" class="mx-auto">
    <v-col cols="10" class="col-md-6">
      <p class="headline title" align="center" justify="center">
        Bienvenida {{ userName }}
      </p>
      <v-spacer></v-spacer>
      <p class="mx-auto" align="center" justify="center">
        ¿Qué te gustaría hacer ahora?
      </p>
      <v-card class="mx-auto py-4 mt-8 " max-width="344">
        <v-card-actions>
          <v-btn text to="/altapaciente" color="#54CEC3" class="mx-auto">
            Crear perfil de un paciente
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="py-4 my-3" max-width="344">
        <v-card-actions>
          <v-btn
            text
            to="/altapaciente"
            color="#54CEC3"
            justify="center"
            class="mx-auto"
          >
            Crear perfil como voluntario
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName'])
  }
}
</script>

<style lang="scss" scoped>
#welcome {
  height: 70vh;
}
.title {
  font-family: 'Yeseva One', cursive;
}
</style>
