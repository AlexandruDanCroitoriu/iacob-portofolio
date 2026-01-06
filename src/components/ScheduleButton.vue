<template>
  <div>
    <button
      @click="openSchedulePopup" 
      class="max-w-sm bg-red-600 rounded-md inline-block text-white px-8 py-3 font-semibold hover:bg-red-700 transition-colors">
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
const openSchedulePopup = (event) => {
  // Prevent any default button behavior that might cause scrolling
  event.preventDefault()
  
  // Save current scroll position
  const scrollX = window.scrollX || window.pageXOffset
  const scrollY = window.scrollY || window.pageYOffset
  
  if (window.daySchedule) {
    window.daySchedule.initPopupWidget({
      url: props.serviceUrl,
      color: {
        primary: '#1f2937', // dark gray for dark theme
        secondary: '#374151' // lighter dark gray for secondary elements
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
        padding: '0 !important',
        backgroundColor: '#111827 !important', // dark background
        color: '#f9fafb !important' // light text
      }
    })
    
    // Restore scroll position after a brief delay to ensure popup is rendered
    setTimeout(() => {
      window.scrollTo(scrollX, scrollY)
    }, 10)
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
          primary: '#1f2937', // dark gray for dark theme
          secondary: '#374151' // lighter dark gray for secondary elements
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
          padding: '0 !important',
          backgroundColor: '#111827 !important', // dark background
          color: '#f9fafb !important' // light text
        }
      })
      
      // Restore scroll position after a brief delay to ensure popup is rendered
      setTimeout(() => {
        window.scrollTo(scrollX, scrollY)
      }, 10)
    }
    document.head.appendChild(script)
  }
}
</script>

<style scoped>
/* Additional button styles can be added here if needed */
</style>
