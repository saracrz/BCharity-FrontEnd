<template>
  <v-row id="background" class="pt-5px">
    <v-col cols="12" class="col-md-6 ">
      <v-col cols="12" class="col-md-8">
        <v-content
          id="welcome"
          align="center"
          justify="center"
          style="padding: 20px"
        >
          <p class="mx-auto mr-2 mb-0">
            Bienvenido a BCharity
          </p>
        </v-content>
        <v-content
          id="text"
          class="mx-auto my-0"
          align="center"
          justify="center"
          style="padding: 0px"
        >
          <p class="text justify  mx-8 my-0 mb-6 mt-2 text-center">
            Somos una organización que conecta voluntarios con pacientes
            hospitalarios. Creemos en un mundo mejor y esperamos que nos ayudes
            a conseguirlo.
          </p>
          <v-img
            width="140"
            class="mx-auto "
            :src="require('~/assets/landing.png')"
          ></v-img>
          <v-spacer></v-spacer>
        </v-content>
      </v-col>

      <div>
        <v-spacer></v-spacer>

        <p class="title mx-auto mt-6 mb-10" align="center" justify="center">
          ¿Qué te gustaría hacer ahora?
        </p>
      </div>
      <div class="text-center">
        <v-btn class="ma-2" text to="/altapaciente" outlined color="#54CEC3"
          >Alta Paciente</v-btn
        >
        <v-btn class="ma-2" text to="/altavoluntario" outlined color="#54CEC3"
          >Perfil Voluntario</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName', 'getRole'])
  },
  created() {
    setTimeout(() => {
      console.log(this.getRole)
      if (this.getRole === 'Voluntario') {
        this.$router.push('/volunteermessages')
      }
    }, 0)
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
#button {
  height: 50px;
  width: 150px;
  display: flex;
}
</style>
