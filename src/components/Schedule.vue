<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Schedule Your Session
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Book a consultation or training session that fits your schedule
      </p>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Available Services</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Initial Consultation</h3>
          <p class="text-gray-600 text-sm mb-3">60 minutes - Free assessment and goal setting</p>
          <p class="text-blue-600 font-semibold">Free</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Personal Training</h3>
          <p class="text-gray-600 text-sm mb-3">60 minutes - One-on-one training session</p>
          <p class="text-blue-600 font-semibold">$80/session</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Nutrition Consultation</h3>
          <p class="text-gray-600 text-sm mb-3">45 minutes - Personalized nutrition plan</p>
          <p class="text-blue-600 font-semibold">$60/session</p>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Fitness Assessment</h3>
          <p class="text-gray-600 text-sm mb-3">90 minutes - Comprehensive fitness evaluation</p>
          <p class="text-blue-600 font-semibold">$100/session</p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">Book Your Appointment</h2>
      <div class="calendly-inline-widget" 
           data-url="https://calendly.com/croitoriu-alexandru" 
           style="min-width:320px;height:700px;">
      </div>
    </div>

    <div class="mt-8 text-center">
      <p class="text-gray-600 mb-4">
        Have questions? Need a custom package?
      </p>
      <div class="space-x-4">
        <a href="mailto:contact@iacob.com" 
           class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
          Email Me
        </a>
        <a href="tel:+1234567890" 
           class="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
          Call Me
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Load Calendly widget script if not already loaded
  if (!window.Calendly) {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
</style>
