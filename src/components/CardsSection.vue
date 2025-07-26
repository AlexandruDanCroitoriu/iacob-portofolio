<template>
  <section class="z-10 hidden md:block">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Service Cards -->
        <div 
          v-for="service in iacobData.services" 
          :key="service.id"
          class="bg-gray-200 bg-opacity-90 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
          :style="getCardShadow(service.id)"
        >
          <!-- Card Content -->
          <div class="text-center">
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              {{ service.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ service.description }}
            </p>
            
            <!-- Action Button -->
            <button 
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
              @click="scrollToService(service.id)"
            >
              {{ iacobData.ui.buttons.seeDetails }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iacobData from '../data/iacobData.js'

// Function to get card shadow based on service type
const getCardShadow = (serviceId) => {
  // Sharp, minimal shadow effect
  return 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);'
}

// Function to scroll to the corresponding service in ServicesSection
const scrollToService = (serviceId) => {
  const targetElement = document.getElementById(`service-${serviceId}`)
  if (targetElement) {
    // Remove any existing animation class first
    targetElement.classList.remove('pulse-animation')
    
    // Scroll to the element
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
    
    // Add animation after a short delay to ensure scroll has started
    setTimeout(() => {
      targetElement.classList.add('pulse-animation')
      
      // Remove the animation class after 1 second
      setTimeout(() => {
        targetElement.classList.remove('pulse-animation')
      }, 1000)
    }, 500) // Wait 500ms for scroll to start
  }
}
</script>

<style scoped>
/* Line clamp utility for description truncation */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive visibility - hidden on mobile, visible on tablet and up */
@media (max-width: 767px) {
  section {
    display: none !important;
  }
}
</style>
