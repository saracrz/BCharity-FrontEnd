<template>
  <div>
    <v-row align="center" justify="center" class=" general">
      <img width="135px" class="mx-12" :src="require('~/assets/logo-bc.png')" />
      <v-col cols="10" class="col-md-6">
        <v-form ref="form" lazy-validation>
          <v-card-title>
            <h4 class="mx-auto">Crea una cuenta</h4>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="name"
              class="font-weight-thin"
              label="Name"
              color="#54CEC3"
              :rules="[rules.required]"
              validate-on-blur
            />
            <v-text-field
              v-model="email"
              class="pt-0 mt-0 font-weight-thin"
              label="E-mail"
              color="#54CEC3"
              :rules="[rules.required, rules.email]"
              validate-on-blur
            />
            <v-text-field
              v-model="password"
              class="pt-0 mt-0 font-weight-thin"
              color="#54CEC3"
              :type="showPassword ? 'text' : 'password'"
              :rules="[rules.required, rules.password]"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              @click:append="showPassword = !showPassword"
            />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                id="button-register"
                width="400px"
                to="/infopersonal"
                center
                color="#54CEC3"
                class="mr-4 white--text"
                @click="signup"
                >Registro</v-btn
              >
            </v-card-actions>

            <p class="font-weight-light">
              ¿Ya tienes una cuenta?
              <v-btn text to="/login" color="#54CEC3">Inicia sesión</v-btn>
            </p>
          </v-card-text>
        </v-form>
      </v-col>
    </v-row>
  </div>
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
#background {
  background-color: #54cec3;
}
#button-register {
  width: 300px;
  align-content: center;
}

#general {
  font-family: 'Lato', sans-serif;
}
</style>
