<template>
  <div>
    <v-row class="form mx-auto ">
      <p class="subtitle-1 font-weight-regular mx-auto  my-2 mb-8">
        Información personal
      </p>
      <v-col cols="11" justify="center" class="mx-auto font-weight-light">
        <v-avatar class=" ml-4">
          <img src="./../assets/079801.jpg" class="pic mb-10" alt="Maria" />
        </v-avatar>

        <v-spacer></v-spacer>
        <v-text-field
          v-model="newUser.name"
          color="#54CEC3"
          class="mt-0 pt-0"
          placeholder="Sabrina"
          outlined
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="newUser.apellido"
          style="padding:0px"
          label="Apellido"
          loader-height="1"
          class="mt-0 pt-0 "
          placeholder="Díaz"
          color="#54CEC3"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="newUser.phone"
          label="Teléfono"
          placeholder="686-333-988"
          color="#54CEC3"
          outlined
        ></v-text-field>
        <v-select
          v-model="newUser.lugar"
          color="#54CEC3"
          class="mt-0 pt-0"
          placeholder="Elige una localidad"
          outlined
          :items="Localidad"
          :rules="[v => !!v || 'La localidad es obliglatoria']"
          label="Localidad"
        ></v-select>

        <v-content>
          <v-btn
            color="#54CEC3"
            width="300px"
            class="mt-0 white--text"
            @click="createUser()"
            >Continuar</v-btn
          >
        </v-content>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import API from '~/services/api'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      newUser: {
        name: '',
        apellido: '',
        phone: '',
        lugar: ''
      },
      Localidad: [
        'Gran Canaria',
        'Lanzarote',
        'Fuerteventura',
        'Tenerife',
        'La Palma',
        'El Hierro',
        'La Gomera'
      ]
    }
  },
  computed: {
    ...mapGetters(['getToken', 'getUserID'])
  },
  methods: {
    async createUser() {
      await API.updateUser(this.getUserID, this.newUser, this.getToken)
      this.$router.push('/welcome')
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 20px;
}
.form {
  font-family: 'Lato', sans-serif;
}
.button-continue {
  align-content: center;
}
</style>
