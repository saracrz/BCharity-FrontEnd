<template>
  <v-row>
    <div
      id="colaboration"
      align="center"
      justify="center"
      class="mx-auto mt-12"
    >
      <p>¡Enhorabuena Carlos!</p>
    </div>
    <div>
      <v-col>
        <p class="text subtitle-1 mx-8 text-center">
          Tu perfil ha sido creado con éxito. Pronto algún paciente se pondrá en
          contacto contigo.
        </p>
      </v-col>
    </div>
    <v-btn
      id="button-voluntarios"
      to="/volunteermessages"
      center
      color="#54CEC3"
      justify="align-center"
      class="mx-auto mx-auto my-6 white--text"
      >Ir a mensajes</v-btn
    >
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#colaboration {
  font-family: 'Yeseva One', cursive;
}
.text {
  font-family: 'Lato', sans-serif;
}
</style>
