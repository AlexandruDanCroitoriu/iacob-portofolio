<template>
  <section id="why-me" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why <span class="text-red-500">Me</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ iacobData.whyMe.subtitle }}
        </p>
      </div>

      <!-- Reasons Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(reason, index) in iacobData.whyMe.reasons" 
          :key="reason.id"
          class="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
        >
          <!-- Number Badge -->
          <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-6">
            <span class="text-white text-xl font-bold">{{ index + 1 }}</span>
          </div>

          <!-- Reason Title -->
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ reason.title }}
          </h3>
          
          <!-- Reason Description -->
          <p class="text-gray-600 leading-relaxed">
            {{ reason.description }}
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <p class="text-lg text-gray-600 mb-6">
          Ready to start your transformation journey?
        </p>
        <ScheduleButton text="GET STARTED TODAY" />
      </div>
    </div>
  </section>
</template>

<script setup>
import iacobData from '../data/iacobData.js'
import ScheduleButton from './ScheduleButton.vue'
</script>

<style scoped>
/* Hover effects */
.hover\:bg-gray-100:hover {
  background-color: #f3f4f6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .grid {
    gap: 1.5rem;
  }
}
</style>
