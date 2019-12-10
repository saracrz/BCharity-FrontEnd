<template>
  <v-row align="center" justify="center" class="mx-auto">
    <v-col cols="10" class="col-md-6">
      <v-content>
        <v-container id="welcome" align="center" justify="center">
          Bienvenida {{ userName }}
        </v-container>
      </v-content>

      <div>
        <v-spacer></v-spacer>
        <p class="mx-auto" align="center" justify="center">
          ¿Qué te gustaría hacer ahora?
        </p>
        <v-card color="#54CEC3" class="mx-auto py-0 mt-8 " width="300">
          <v-card-actions>
            <v-btn text to="/altapaciente" class="mx-auto white--text">
              Crear perfil de un paciente
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card color="#54CEC3" class="py-0 my-3 " dense width="300">
          <v-card-actions>
            <v-btn
              text
              to="/altavoluntario"
              justify="center"
              class="mx-auto  white--text"
            >
              Crear perfil como voluntario
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
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
  font-family: 'Yeseva One', cursive;
  font-size: 20px;
}
#titulo {
  height: 70vh;
}
</style>
