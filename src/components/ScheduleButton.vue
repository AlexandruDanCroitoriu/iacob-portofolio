<template>
  <div>
    <button
      @click="openSchedulePopup" 
      class="bg-red-600 rounded-md block text-white px-8 py-3 font-semibold hover:bg-red-700 transition-colors">
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  serviceUrl: {
    type: String,
    default: 'https://alexsakii.dayschedule.com/'
  }
})

// Load DaySchedule widget script
onMounted(() => {
  // Check if script is already loaded
  if (!window.daySchedule && !document.querySelector('script[src*="dayschedule-widget"]')) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-widget.min.js'
    script.defer = true
    document.head.appendChild(script)
  }
})

// Function to open the schedule popup
const openSchedulePopup = () => {
  if (window.daySchedule) {
    window.daySchedule.initPopupWidget({
      url: props.serviceUrl,
      color: {
        primary: '#dc2626', // red-600 to match button
        secondary: '#fca5a5' // red-300 for secondary color
      },
      hideHeader: false, // Keep DaySchedule branding
      width: '100%',
      height: '100%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      style: {
        width: '100vw !important',
        height: '100vh !important',
        maxWidth: 'none !important',
        maxHeight: 'none !important',
        top: '0 !important',
        left: '0 !important',
        right: '0 !important',
        bottom: '0 !important',
        margin: '0 !important',
        padding: '0 !important'
      }
    })
  } else {
    // Fallback if script hasn't loaded yet
    console.warn('DaySchedule widget not loaded yet')
    // Try loading the script again
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-widget.min.js'
    script.defer = true
    script.onload = () => {
      window.daySchedule.initPopupWidget({
        url: props.serviceUrl,
        color: {
          primary: '#dc2626',
          secondary: '#fca5a5'
        },
        width: '100%',
        height: '100%',
        maxWidth: '100vw',
        maxHeight: '100vh',
        style: {
          width: '100vw !important',
          height: '100vh !important',
          maxWidth: 'none !important',
          maxHeight: 'none !important',
          top: '0 !important',
          left: '0 !important',
          right: '0 !important',
          bottom: '0 !important',
          margin: '0 !important',
          padding: '0 !important'
        }
      })
    }
    document.head.appendChild(script)
  }
}
</script>

<style scoped>
/* Additional button styles can be added here if needed */
</style>
