<template>
  <section id="services" class="pt-20 pb-16 bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ iacobData.ui.sections.services.title.split(' ')[0] }} <span class="text-red-500">{{ iacobData.ui.sections.services.title.split(' ')[1] }}</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          {{ iacobData.ui.sections.services.subtitle }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="space-y-6 max-w-4xl mx-auto">
        <div 
          v-for="service in iacobData.services" 
          :key="service.id"
          :id="`service-${service.id}`"
          class="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 w-full hover:bg-gray-750"
        >
          <!-- Service Title -->
          <h3 class="text-2xl font-bold text-white mb-4 text-center whitespace-nowrap">
            {{ service.title }}
          </h3>
          
          <!-- Service Description -->
          <p class="text-gray-300 text-center leading-relaxed mb-8">
            {{ service.description }}
          </p>
          
          <!-- Action Button -->
          <div class="text-center">
            <ScheduleButton class="inline-block"
              :text="`Book ${service.title}`"
              :service-url="service.scheduleUrl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iacobData from '../data/iacobData.js'
import ScheduleButton from './ScheduleButton.vue'

// Function to get service number for icon
const getServiceNumber = (serviceId) => {
  const serviceMap = {
    'personal-training': '1',
    'nutrition-coaching': '2', 
    'online-coaching': '3'
  }
  return serviceMap[serviceId] || '1'
}


</script>

<style scoped>
/* Line clamp utility for description truncation */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hover effects */
.hover\:shadow-xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Pulse animation for when service is scrolled to */
@keyframes pulseScale {
  0% {
    transform: scale(1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.35);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
}

.pulse-animation {
  animation: pulseScale 1s ease-in-out;
  transform-origin: center;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .space-y-8 {
    gap: 1.5rem;
  }
}
</style>
