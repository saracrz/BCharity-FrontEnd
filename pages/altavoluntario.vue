<template>
  <div>
    <v-img height="250" :src="require('~/static/Carlos.jpg')"></v-img>
    <v-card id="paciente-card" class="mx-auto">
      <v-card-title>Alberto</v-card-title>
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
        <v-container fluid>
          <v-textarea
            counter
            label="Text"
            :rules="rules"
            :value="value"
          ></v-textarea>
        </v-container>
      </v-card-text>

      <v-card-title>Disponibilidad:</v-card-title>
      <v-select
        v-model="valor"
        class="mx-7"
        :items="items"
        label="Selcciona los días"
        multiple
      >
        <template v-slot:selection="{ item, index }">
          <v-chip v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="grey--text caption"
            >(+{{ valor.length - 1 }} others)</span
          >
        </template>
      </v-select>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          id="button-voluntarios"
          to="/profilecreated"
          center
          color="#54CEC3"
          justify="align-center"
          class="mx-auto mr-8 my-6 white--text"
          >Guardar</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [v => v.length <= 150 || 'Max 150 characters'],
    value:
      'A Alberto le gusta hablar de cine , salir a dar un paseo, jugar a dominó y que le enseñen a utilizar nuevas tecnologías.',
    items: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    valor: ['Lunes', 'Martes', 'miércoles']
  })
}
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
