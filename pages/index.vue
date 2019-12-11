<template>
  <v-row id="background" class="pt-5px">
    <v-col cols="12" class="col-md-6 ">
      <v-content id="welcome" align="center" justify="center">
        <p class="mx-auto mr-8">
          Bienvenido a BCharity
        </p>
      </v-content>
      <v-img
        width="140"
        class="mx-auto "
        :src="require('~/assets/landing.png')"
      ></v-img>

      <v-col cols="12" class="col-md-8">
        <v-content
          id="text"
          class="mx-auto my-0"
          align="center"
          justify="center"
        >
          <p class="subtitle-1 "></p>
          <p class="text subtitle-1 mx-8 my-0 mb-6 text-center">
            Somos una organización que conecta voluntarios con pacientes
            hospitalarios. Creemos en un mundo mejor y esperamos que nos ayudes
            a conseguirlo.
          </p>
          <v-spacer></v-spacer>
        </v-content>
      </v-col>

      <div>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <p class="mx-auto mt-6" align="center" justify="center">
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
  font-size: 24px;
}
.text {
  font-family: 'Lato', sans-serif;
}
#background {
  height: 170px;
  padding-top: 5px;
}
</style>
