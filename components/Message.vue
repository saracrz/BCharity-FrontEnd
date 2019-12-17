<template>
  <div>
    <v-subheader
      v-if="service.header"
      :key="service.header"
      v-text="service.header"
    >
    </v-subheader>

    <v-divider
      v-else-if="service.divider"
      :key="index"
      :inset="service.inset"
    ></v-divider>

    <v-list-item v-else :key="service.name">
      <v-list-item-avatar>
        <v-img :src="require('~/static/persona-de-60.jpg')"></v-img>
        <v-list-item-title></v-list-item-title>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-if="service.patient_Id"
          >{{ service.patient_Id.name }}
        </v-list-item-title>
        <v-list-item-subtitle v-model="newService.message"
          >Hola! ¿cómo estás? Te escribo porque me gustaría proponerte una
          colaboración.{{ service.message }}
        </v-list-item-subtitle>
        <v-btn color="#54CEC3" class="caption mr-12" text to="/message"
          >Más</v-btn
        >
        <v-list-item-subtitle>{{ service.name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-subheader
      v-if="service.header"
      :key="service.header"
      v-text="service.header"
    >
    </v-subheader>

    <v-divider
      v-else-if="service.divider"
      :key="index"
      :inset="service.inset"
    ></v-divider>

    <v-list-item v-else :key="service.name">
      <v-list-item-avatar>
        <v-img :src="require('~/assets/079801.jpg')"></v-img>
        <v-list-item-title></v-list-item-title>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-if="service.patient_Id"
          >{{ service.patient_Id.name }}
        </v-list-item-title>
        <v-list-item-subtitle v-model="newService.message"
          >Buenos días! Te escribo porque mi madre está hospitalizada y...{{
            service.message
          }}
        </v-list-item-subtitle>
        <v-btn color="#54CEC3" class="caption mr-12" text to="/message"
          >Más</v-btn
        >
        <v-list-item-subtitle>{{ service.name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      newService: {
        message: ''
      }
    }
  }
}
</script>
