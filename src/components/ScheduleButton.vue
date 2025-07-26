<template>
  <button
    @click="bookService" 
  class="bg-red-600 rounded-md block text-white px-8 py-3 font-semibold hover:bg-red-700 transition-colors">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
// Function to handle booking
const bookService = (serviceId) => {
  // This could open a booking modal, navigate to a booking page, or trigger other actions
  console.log(`Booking service: ${serviceId}`)
  // For now, we'll just scroll to a contact section or show an alert
  alert(`Booking ${serviceId} - This would typically open a booking form or redirect to a scheduling system.`)
}
</script>

<style scoped>
/* Additional button styles can be added here if needed */
</style>
