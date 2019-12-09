<template>
  <div class="mt-10">
    <p class="title mx-4 mt-10">Voluntarios:</p>
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
