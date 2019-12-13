<template>
  <v-list three-line>
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header" v-text="item.header">
      </v-subheader>

      <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider>

      <v-list-item v-else :key="item.name">
        <v-list-item-avatar>
          <v-img :src="require('~/static/persona-de-60.jpg')"></v-img>
          <v-list-item-title></v-list-item-title>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
          <v-list-item-subtitle>{{ item.message }} </v-list-item-subtitle>
          <v-btn color="#54CEC3" class="caption" text to="/message">Más</v-btn>
          <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from '../plugins/axios'
export default {
  data: () => ({
    items: {
      patient_Id: {
        name: ''
      },
      volunteer_Id: {
        dias: ''
      },
      message: '',
      horario: '',
      dias: ''
    }
  }),
  computed: {
    ...mapGetters(['getVolunteerData', 'getPacientData', 'getServiceData'])
  },
  created() {
    setTimeout(() => {
      console.log({ volunteer: this.getVolunteerData })
      axios
        .get(`/services/search?volunteer_Id=${this.getVolunteerData._id}`)
        .then(services => (this.items = services.data))
    }, 0)
  }
}
</script>

<style lang="scss" scoped></style>
