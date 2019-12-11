<template>
  <v-row id="background" class="pt-5px">
    <v-col cols="12" class="col-md-6 ">
      <v-col cols="12" class="col-md-8">
        <v-content id="welcome" align="center" justify="center">
          <p class="mx-auto mr-8 mb-0">
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
          <p class="text subtitle-1 mx-8 my-0 mb-6 mt-0 text-center">
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
        <v-divider
          style="margin-left:80px; margin-right:80px"
          color="#54CEC3"
          class="my-10"
        ></v-divider>
        <p class="title mx-auto mt-6" align="center" justify="center">
          Acceder a BCharity
        </p>
      </div>
      <div class="text-center">
        <v-btn class="ma-2" text to="/login" outlined color="#54CEC3"
          >Login</v-btn
        >
        <v-btn class="ma-2" text to="/signup" outlined color="#54CEC3"
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
