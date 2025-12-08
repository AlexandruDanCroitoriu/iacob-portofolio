<template>
  <section id="why-me" class="py-20 bg-zinc-900">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Why <span class="text-red-500">Me</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          {{ iacobData.whyMe.subtitle }}
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-12 items-start">
          
          <!-- Left Column - Image -->
          <div class="lg:col-span-1">
            <div class="relative">
              <div class="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="../assets/images/image00029.jpeg" 
                  alt="Alexandru Iacob Training"
                  class="w-full h-full object-cover"
                />
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          <!-- Right Column - Reasons Grid -->
          <div class="lg:col-span-2">
            <div class="grid md:grid-cols-1 gap-6">
              <div 
                v-for="(reason, index) in iacobData.whyMe.reasons" 
                :key="reason.id"
                class="bg-zinc-800 rounded-2xl p-6 hover:bg-zinc-750 transition-all duration-300 border border-zinc-700"
              >
                <div class="flex items-start space-x-4">
                  <!-- Number Badge -->
                  <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-lg font-bold">{{ index + 1 }}</span>
                  </div>

                  <div class="flex-1">
                    <!-- Reason Title -->
                    <h3 class="text-xl font-bold text-white mb-2">
                      {{ reason.title }}
                    </h3>
                    
                    <!-- Reason Description -->
                    <p class="text-gray-300 leading-relaxed text-sm">
                      {{ reason.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <p class="text-lg text-gray-300 mb-6">
          {{ iacobData.ui.sections.whyMe.callToActionText }}
        </p>
        <ScheduleButton :text="iacobData.ui.buttons.getStarted" class="flex justify-center"/>
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
.hover\:bg-zinc-750:hover {
  background-color: #27272a;
}

/* Image aspect ratio */
.aspect-\[3\/4\] {
  aspect-ratio: 3 / 4;
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

@media (max-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .lg\:col-span-1, .lg\:col-span-2 {
    grid-column: span 1 / span 1;
  }
}
</style>
