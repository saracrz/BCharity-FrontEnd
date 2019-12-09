<template>
  <div>
    <v-row class="form mx-auto ">
      <p class="title ml-12 my-2 mb-8">Información personal</p>
      <v-avatar class=" ml-8">
        <img src="./../assets/079801.jpg" class="pic" alt="Maria" />
      </v-avatar>
      <v-col cols="10" justify="center" class="mx-auto font-weight-light">
        <v-text-field
          dense
          color="#54CEC3"
          class="mt-0 pt-0"
          placeholder="Lily"
          outlined
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          dense
          label="Apellido"
          loader-height="1"
          class="mt-0 pt-0 caption"
          placeholder="Díaz"
          color="#54CEC3"
          outlined
        ></v-text-field>
        <v-text-field
          label="Teléfono"
          dense
          placeholder="686-333-988"
          color="#54CEC3"
          outlined
        ></v-text-field>
        <v-select
          v-model="select"
          color="#54CEC3"
          class="mt-0 pt-0"
          placeholder="Díaz"
          dense
          outlined
          :items="Localidad"
          :rules="[v => !!v || 'La localidad es obliglatoria']"
          label="Localidad"
        ></v-select>
        <v-file-input
          dense
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
  margin-top: 40px;
  font-family: 'Lato', sans-serif;
}
.button-continue {
  align-content: center;
}
</style>
