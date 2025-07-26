<template>
  <section class="pt-20 pb-32 bg-black shadow-lg shadow-gray-900/30">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Column - Text Content -->
        <div class="flex flex-col items-center justify-center">
          <!-- Main Heading -->
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {{ iacobData.personal.name.split(' ')[0] }}<span class="text-red-500"> {{ iacobData.personal.name.split(' ')[1] }}</span>
          </h1>
          
          <!-- Title -->
          <h2 class="text-xl md:text-2xl text-gray-300 mb-4 text-center">{{ iacobData.personal.title }}</h2>
          
          <!-- Subtitle Quote -->
          <blockquote class="text-lg md:text-xl text-gray-300 italic mb-8 text-center max-w-xl">
            "{{ iacobData.personal.subtitle }}"
          </blockquote>
          
          <!-- Call to Action Button -->
          <ScheduleButton text="BOOK NOW" />
        </div>

        <!-- Right Column - Profile Photo -->
        <div class="order-first lg:order-last">
          <div class="w-full aspect-square max-w-sm mx-auto relative overflow-hidden rounded-2xl">
            <img 
              :src="iacobData.personal.profileImage" 
              :alt="iacobData.personal.name"
              class="w-full h-full object-cover"
            />
            <!-- Experience Badge -->
            <div class="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg">
              <div class="text-center">
                <div class="text-lg font-bold">{{ iacobData.personal.yearsExperience }}+</div>
                <div class="text-xs uppercase">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Smooth scrolling and entrance animations can be added here
import { onMounted } from 'vue'
import ScheduleButton from './ScheduleButton.vue'
import iacobData from '../data/iacobData.js'

onMounted(() => {
  // Add entrance animations or scroll effects
  console.log('HeaderSection mounted')
})
</script>

<style scoped>
/* Photo placeholder styling */
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
