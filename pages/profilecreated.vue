<template>
  <v-row align="center" justify="center">
    <img
      width="70px"
      class="mx-12 mt-6"
      :src="require('~/assets/logocruzado.png')"
    />
    <v-col cols="10" class="col-md-6">
      <div id="ok" align="center" justify="center" class="mx-auto mt-4">
        <p>¡Enhorabuena Carlos!</p>
        <p class="text subtitle-1 mx-8 text-center mt-0">
          Tu perfil ha sido creado con éxito. Pronto algún paciente se pondrá en
          contacto contigo.
        </p>
        <v-btn
          id="button-voluntarios"
          to="/volunteermessages"
          center
          outlined
          color="#54CEC3"
          align="center"
          justify="align-center"
          class="mx-auto my-6 text"
          >Ir a mensajes</v-btn
        >
      </div>

      <v-col cols="12" class="col-md-6"> </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#ok {
  font-family: 'Yeseva One', cursive;
  font-size: 20px;
}
.text {
  font-family: 'Lato', sans-serif;
}
</style>
