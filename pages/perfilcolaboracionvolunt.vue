<template>
  <div>
    <v-img height="300" :src="require('~/static/Carlos.jpg')"></v-img>
    <v-card id="paciente-card" class="mx-auto">
      <v-card-title>Carlos</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 subtitle-1 black--text">
          Gran Canaria
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          id="button-voluntarios"
          to="/searchvolunteers"
          center
          color="#54CEC3"
          justify="align-center"
          class="mx-auto mr-8 my-6 white--text"
          >Proponer Colaboración</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#button-voluntarios {
  width: 300px;
  align-content: center;
}
// #paciente-card {
//   border-radius: 30px 30px 0 0;
// }
</style>
