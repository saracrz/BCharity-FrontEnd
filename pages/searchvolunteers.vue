<template>
  <div>
    <p class="subtitle-1 font-weight-regular mx-2 mt-2">
      Selecciona un voluntario
    </p>
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
