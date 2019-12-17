<template>
  <v-row align="center" justify="center" class="mt-12">
    <v-col cols="10" class="col-md-4">
      <v-form ref=" caption form" lazy-validation>
        <v-card-title>
          <h3 class="mx-2">¡Hola de nuevo!</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            class="font-weight-light subtitle-1"
            label="E-mail"
            color="#54CEC3"
            outlined
            style="padding-bottom:0px; margin-bottom: 0px"
            :rules="[rules.required, rules.email]"
            validate-on-blur
          />
          <v-text-field
            v-model="password"
            outlined
            class="pt-0 font-weight-thin caption"
            color="#54CEC3"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="Password"
            @click:append="showPassword = !showPassword"
          />
          <v-card-actions>
            <v-btn
              id="button-login"
              center
              rounded
              color="#54CEC3"
              justify="align-center"
              class="mr-4 white--text"
              @click="login"
              >Entrar</v-btn
            >
          </v-card-actions>

          <p class="font-weight-light" justify="center">
            ¿Aún no tienes cuenta?

            <v-btn text to="/signup" color="#F2545B">Regístrate</v-btn>
          </p>
        </v-card-text>
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
      showPassword: false,
      rules: {
        required: v => !!v || 'Item is required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    async login() {
      const user = {
        user_email: this.email,
        user_password: this.password
      }

      const newToken = await axios.post('auth/login', user)
      if (!newToken.data.error) {
        this.$store.commit('saveUser', newToken.data)
        this.$router.push('/welcome')
      } else {
        alert(newToken.data.error)
      }
    }
  }
}
</script>

<style scoped>
#button-login {
  width: 300px;
}
</style>
