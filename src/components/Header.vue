<template>
  <section class="relative min-h-screen flex items-center justify-center bg-black overflow-hidden hero-background">
    <!-- Gradient overlay for text readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>

    <!-- Centered Content -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <!-- Main Heading -->
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        {{ iacobData.personal.name.split(' ')[0] }}<span class="text-red-500"> {{ iacobData.personal.name.split(' ')[1] }}</span>
      </h1>
      
      <!-- Call to Action Button -->
      <div class="mt-8">
        <ScheduleButton :text="iacobData.ui.buttons.bookNow" />
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ScheduleButton from './ScheduleButton.vue'
import iacobData from '../data/iacobData.js'

const isLoaded = ref(false)

onMounted(() => {
  // Trigger animations after component is mounted
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
  
  console.log('HeaderSection mounted with background image')
})
</script>

<style scoped>
/* Background image positioning and effects */
.bg-image-overlay {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Ensure background image is visible */
img {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

/* Add a fallback background color and hero background */
section {
  background-color: #1a1a1a;
}

.hero-background {
  background-image: url('../assets/images/image00064.jpeg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Entrance animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animations to content elements */
h1, h2, blockquote, .inline-block {
  animation: fadeInUp 0.8s ease-out forwards;
}

h2 {
  animation-delay: 0.2s;
}

blockquote {
  animation-delay: 0.4s;
}

.inline-block {
  animation-delay: 0.6s;
}

/* Ensure text is readable on all screen sizes */
@media (max-width: 640px) {
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  blockquote {
    font-size: 1.125rem;
  }
}
</style>
