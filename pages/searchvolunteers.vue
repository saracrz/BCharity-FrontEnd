<template>
  <div class="mt-10">
    <v-title class="title mx-4 mt-10">Voluntarios:</v-title>
    <Volunteer></Volunteer>
  </div>
</template>

<script>
import Volunteer from '@/components/Volunteer.vue'
export default {
  name: 'Searchvolunteer',
  components: {
    Volunteer
  }
}
</script>

<style lang="scss" scoped></style>
