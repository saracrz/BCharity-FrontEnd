<template>
  <div>
    <v-row class="form ">
      <p class="title">Información personal</p>

      <v-avatar>
        <img src="./../assets/079801.jpg" class="pic" alt="Maria" />
      </v-avatar>
      <v-col cols="10" justify="center" class="mx-auto">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Apellido"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Dirección - Código Postal"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Teléfono"
          required
        ></v-text-field>
        <v-select
          v-model="select"
          :items="Localidad"
          :rules="[v => !!v || 'La localidad es obliglatoria']"
          label="Localidad"
          required
        ></v-select>
        <v-file-input label="Adjuntar copia DNI" class="mr-10px"></v-file-input>
        <v-content>
          <v-btn to="/welcome" color="#54CEC3" class="mr-4 button-continue"
            >Continuar</v-btn
          >
          <v-container>
            <nuxt />
          </v-container>
        </v-content>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  margin-top: 10px;
  width: 300px;
  align-content: center;
}
.pic {
  margin-right: 0px;
}
</style>
