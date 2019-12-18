<template>
  <v-row id="background">
    <v-col class="col-md-6 ">
      <v-content
        id="welcome"
        style="padding:0px"
        align="center"
        justify="center"
      >
        <v-img
          class="white--text "
          style="padding:0px"
          height="220px"
          :src="require('~/assets/voluntarios.jpg')"
          gradient="to top right, rgba(100,115,201,.20), rgba(25,32,72,.2)"
          ><p class="mx-auto mr-2 mb-0" style="line-height:175px">
            ¡Bienvenido a Bcharity!
          </p></v-img
        >

        <p class="mx-auto mr-2 mb-0"></p>
      </v-content>
      <v-content
        id="text"
        class="mx-auto my-0"
        align="center"
        justify="center"
        style="padding: 0px"
      >
        <p class="d-inline-block subtitle mx-8 my-6 mb-0 mt-12 text-center">
          Somos una organización que conecta voluntarios con pacientes
          hospitalarios.
        </p>
        <p class="d-inline-block subtitle mx-8 my-0 mb-6 mt-2 text-center">
          Creemos en un mundo mejor y esperamos que nos ayudes a conseguirlo.
        </p>

        <v-spacer></v-spacer>
      </v-content>

      <div>
        <p class="title mx-auto mt-8 mb-6" align="center" justify="center">
          ¿Qué te gustaría hacer ahora?
        </p>
      </div>
      <div class="text-center mt-0">
        <v-btn rounded dark min-width="250px" to="/altapaciente" color="#54CEC3"
          >Alta Paciente</v-btn
        >
      </div>
      <div class="text-center">
        <v-btn
          rounded
          dark
          min-width="250px"
          center
          class="my-2"
          to="/altavoluntario"
          color="#54CEC3"
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
  }
  // created() {
  //   setTimeout(() => {
  //     console.log(this.getRole)
  //     if (this.getRole === 'Voluntario') {
  //       this.$router.push('/')
  //     }
  //   }, 0)
  // }
}
</script>

<style lang="scss" scoped>
#welcome {
  font-family: 'Yeseva One', cursive;
  font-size: 24px;
  padding: 0px;
  text-align: center;
}
.text {
  font-family: 'Lato', sans-serif;
}
#button {
  height: 50px;
  width: 150px;
  display: flex;
}
.image {
  height: 150px;
  width: 100%;
}
</style>
