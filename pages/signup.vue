<template>
  <v-row align="center" justify="center" class="general mt-12">
    <v-col cols="10" class="col-md-4">
      <v-form ref="caption form" lazy-validation>
        <v-card-title>
          <h3 class="mx-2 mb-2">Crear cuenta</h3>
        </v-card-title>
        <v-card-text class="boxes ">
          <v-text-field
            v-model="name"
            outlined
            class="font-weight-thin my-0"
            label="Name"
            color="#54CEC3"
            :rules="[rules.required]"
            validate-on-blur
          />
          <v-text-field
            v-model="email"
            outlined
            class="pt-0 my-0 font-weight-thin"
            label="E-mail"
            color="#54CEC3"
            :rules="[rules.required, rules.email]"
            validate-on-blur
          />
          <v-text-field
            v-model="password"
            outlined
            class="pt-0 my-0 font-weight-thin"
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
              center
              rounded
              color="#54CEC3"
              class="mr-4 white--text"
              @click="signup"
              >Registro</v-btn
            >
          </v-card-actions>

          <p class="font-weight-light">
            ¿Ya tienes una cuenta?
            <v-btn text to="/login" color="#F2545B">Inicia sesión</v-btn>
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
        this.$store.commit('saveUser', newToken.data)
        this.$router.push('/infopersonal')
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
#boxes {
  display: flexbox;
}
</style>
