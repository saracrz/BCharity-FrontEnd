<template>
  <div>
    <v-col cols="12">
      <v-avatar
        color="#54CEC3"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
      Crear perfil voluntario
    </v-col>
    <v-col cols="12" sm="8">
      <v-img
        v-if="!clicked"
        height="270"
        :src="require('~/static/silhouette.jpg')"
      ></v-img>
      <v-img v-if="clicked" height="250" :src="newVolunteer.photoURL"></v-img>
      <v-card-title class="subtitle-1 ml-2"> Hola {{ userName }}!</v-card-title>
      <v-col cols="12" sm="12">
        <v-file-input
          class="mr-4 font-weight-thin"
          outlined
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Sube tu imagen"
          prepend-icon="mdi-camera"
          label="Foto"
          color="#54CEC3"
          @change="clicked = true"
        ></v-file-input>
      </v-col>
      <v-card-text>
        <v-col cols="12" sm="12">
          <v-textarea
            v-model="newVolunteer.description"
            outlined
            color="#54CEC3"
            label="Descripción"
            resize
            rows="6"
            :value="value"
          ></v-textarea>
        </v-col>
      </v-card-text>

      <v-card-title class="subtitle-1"
        >Selecciona tu disponibilidad:</v-card-title
      >
      <v-select
        id="selectDias"
        v-model="newVolunteer.dias"
        class="mx-4 font-weight-thin"
        outlined
        color="#54CEC3"
        :items="items"
        label="Selecciona los días"
        multiple
      >
        <template v-slot:selection="{ item, index }">
          <v-chip v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index === 1" class="grey--text caption"
            >(+{{ horarios.length - 1 }} others)</span
          >
        </template>
      </v-select>
      <v-select
        id="selectHorario"
        v-model="newVolunteer.horario"
        color="#54CEC3"
        :items="horarios"
        label="Selecciona un horario"
        outlined
        class="mx-4 my-0 pt-0 font-weight-thin"
      ></v-select>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          id="button-voluntarios"
          center
          rounded
          color="#54CEC3"
          justify="align-center"
          class="mx-auto mr-8 my-6 white--text"
          @click="createVolunteer()"
          >Guardar</v-btn
        >
      </v-card-actions>
    </v-col>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    step: '1',
    newVolunteer: {
      description:
        'Sara es ingeniera de software y trabaja como Full Stack Developer en una empresa en Las Palmas. Le gusta ir al cine, hacer deporte, especialmente el piragüísmo, leer novelas policíacas y compartir momentos con sus amigos y familia.Ha viajado como voluntaria por muchos países (Asia y Sudamérica) trabajando en proyectos de colaboración humanitaria.Le encantaría ayudar a personas que necesiten de su compañía.¡Para más información contacta con ella!',
      photoURL:
        'https://images.unsplash.com/photo-1495383294417-3166600af8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
      dias: [],
      horario: [],
      userId: ''
    },
    rules: [v => v.length <= 150 || 'Max 150 characters'],
    value: '',
    items: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    horarios: ['Mañana', 'Tarde'],
    clicked: false
  }),
  computed: {
    ...mapGetters(['getUserID', 'userName', 'getToken'])
  },
  methods: {
    createVolunteer() {
      this.newVolunteer.userId = this.getUserID

      axios
        .post('/volunteers', this.newVolunteer, {
          headers: { access_token: this.getToken }
        })
        .then(response => response.data)
        .then(volunteer => {
          console.log({ volunteer })
          this.$router.push('/profilecreated')
        })
    },
    getRandomNumber() {
      return Math.random() * (100 - 10) + 10
    },
    getRandomGender() {
      return 'male'
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
