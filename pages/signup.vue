<template>
  <v-row align="center" justify="center" class="general">
    <v-col cols="10" offset-md="1">
      <v-form ref="form" lazy-validation>
        <v-card-title>
          <h3>Registro</h3>
        </v-card-title>
        <v-card-text id="boxes">
          <v-text-field
            v-model="name"
            label="Name"
            outlined
            :rules="[rules.required]"
            validate-on-blur
          />

          <v-text-field
            v-model="email"
            label="E-mail"
            :rules="[rules.required, rules.email]"
            outlined
            validate-on-blur
          />

          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.password]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="Password"
            outlined
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            id="button-register"
            color="#54CEC3"
            class="mr-4"
            @click="signup"
            >Registro</v-btn
          >
        </v-card-actions>
        <v-text justify="center">
          <p class="font-weight-light">
            ¿Ya tienes una cuenta?

            <v-btn text to="/login" color="#54CEC3">Inicia sesión</v-btn>
          </p>
        </v-text>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      showPassword: false,
      rules: {
        required: v => !!v || 'Item is required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        password: v => v.length > 5 || 'Password too short!'
      }
    }
  },
  methods: {
    async signup() {
      const user = {
        user_name: this.name,
        user_email: this.email,
        user_password: this.password
      }

      const newToken = await axios.post('auth/signup', user)
      if (!newToken.error) {
        this.$store.commit('saveToken', newToken.data)
        this.$router.push('/')
      } else {
        alert(newToken.error)
      }
    }
  }
}
</script>

<style scoped>
#button-register {
  width: 300px;
  align-content: center;
}
.boxes {
  margin-top: 5px;
  padding: 0px;
}
#general {
  font-family: 'Lato', sans-serif;
}
#boxes {
  margin-top: 0px;
  flex-direction: column-reverse;
}
</style>
