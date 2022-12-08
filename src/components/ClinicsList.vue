<template>
  <div>
    <li>
      <router-link :to="clinicsTimeSlotsPage">{{ clinicName }}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  inject: ['dentists'],
  name: 'clinic',
  props: ['clinicName', 'clinicId'],
  computed: {
    clinicsTimeSlotsPage() {
      return '/clinic/' + this.clinicId
    },
  },
}
</script>
