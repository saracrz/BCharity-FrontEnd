<template>
  <div>
    <v-row class="form mx-auto ">
      <p class="subtitle-1 mx-auto  my-2 mb-8">Información personal</p>
      <v-col cols="11" justify="center" class="mx-auto font-weight-light">
        <v-avatar class=" ml-4">
          <img src="./../assets/079801.jpg" class="pic mb-10" alt="Maria" />
        </v-avatar>

        <v-spacer></v-spacer>
        <v-text-field
          color="#54CEC3"
          class="mt-0 pt-0"
          placeholder="Lily"
          outlined
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          label="Apellido"
          loader-height="1"
          class="mt-0 pt-0 caption"
          placeholder="Díaz"
          color="#54CEC3"
          outlined
        ></v-text-field>
        <v-text-field
          label="Teléfono"
          placeholder="686-333-988"
          color="#54CEC3"
          outlined
        ></v-text-field>
        <v-select
          v-model="select"
          color="#54CEC3"
          class="mt-0 pt-0"
          placeholder="Díaz"
          outlined
          :items="Localidad"
          :rules="[v => !!v || 'La localidad es obliglatoria']"
          label="Localidad"
        ></v-select>
        <v-file-input
          class="my-0"
          label="Adjuntar copia DNI"
          color="#54CEC3"
          outlined
        ></v-file-input>
        <v-content>
          <v-btn
            to="/welcome"
            color="#54CEC3"
            width="300px"
            class="mt-0 white--text"
            >Continuar</v-btn
          >
        </v-content>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: '',
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
