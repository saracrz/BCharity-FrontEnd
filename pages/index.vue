<template>
  <v-row id="background" class="pt-5px">
    <v-col cols="12" class="col-md-6 ">
      <v-col cols="12" class="col-md-8">
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
            :src="require('~/assets/manos.jpg')"
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
      </v-col>

      <div>
        <v-spacer></v-spacer>

        <p class="title mx-auto mt-6" align="center" justify="center">
          Acceder a BCharity
        </p>
      </div>
      <div class="text-center">
        <v-btn
          rounded
          dark
          min-width="125px"
          center
          class="my-2"
          to="/login"
          color="#54CEC3"
          >Login</v-btn
        >
        <v-btn
          rounded
          dark
          min-width="125px"
          center
          class="my-2"
          to="/signup"
          color="#54CEC3"
          >Signup</v-btn
        >
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
#button {
  height: 50px;
  width: 150px;
  display: flex;
}
</style>
