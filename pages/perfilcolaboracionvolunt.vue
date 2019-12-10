<template>
  <div>
    <p class="subtitle-1 font-weight-regular mx-2 mt-2">
      Propón una colaboración
    </p>
    <v-img height="300" :src="require('~/static/Carlos.jpg')"></v-img>

    <v-card-title class="mb-0">Carlos</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <div color="#54CEC3" class="subtitle-2 mb-4 ">
        Gran Canaria
      </div>
      <p>
        Carlos es ingeniero de software y trabaja como Full Stack Developer en
        Las Palmas. Le gusta ir al cine, hacer deporte y el piragüísmo. Ha
        viajado como voluntario por muchos países (Asia y Sudamérica) trabajando
        en proyectos de colaboración humanitaria. Le encantaría ayudar a
        personas que necesiten de su compañía.
      </p>
    </v-card-text>

    <v-card-text>
      <v-col cols="12" sm="12">
        <v-textarea
          color="#54CEC3"
          label="Mensaje"
          placeholder="Deja un mensaje al voluntario"
          resize
          rows="2"
          :value="value"
        ></v-textarea>
      </v-col>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        id="button-voluntarios"
        to="/confirmationcolaboration"
        center
        color="#54CEC3"
        justify="align-center"
        class="mx-auto mr-8 my-2 white--text"
        >Proponer Colaboración</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#button-voluntarios {
  width: 300px;
  align-content: center;
}
</style>
