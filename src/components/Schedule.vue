<template>
  <div class="sm:mx-auto sm:px-4 max-w-4xl">
    <div class="bg-white sm:rounded-xl shadow-lg p-6 border border-gray-200">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">Book Your Appointment</h2>
      <div class="calendly-inline-widget" 
          data-url="https://calendly.com/iacob-alexandru1996" 
          style="min-width:320px;height:700px;">
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  // Wait for the component to be fully mounted and DOM to be ready
  await nextTick()
  
  // Function to initialize Calendly widget
  const initCalendly = () => {
    const widgetElement = document.querySelector('.calendly-inline-widget')
    if (window.Calendly && widgetElement) {
      // Clear any existing content
      widgetElement.innerHTML = ''
      
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/iacob-alexandru1996',
        parentElement: widgetElement
      })
    }
  }

  // Check if Calendly is already loaded
  if (window.Calendly) {
    // Add a small delay to ensure DOM is ready after page transition
    setTimeout(initCalendly, 100)
  } else {
    // Load Calendly script if not already loaded
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      setTimeout(initCalendly, 100)
    }
    document.head.appendChild(script)
  }
})
</script>
<!-- https://calendly.com/iacob-alexandru1996 -->
<style scoped>
</style>
