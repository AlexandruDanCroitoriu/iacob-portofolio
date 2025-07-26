<template>
  <section id="who-i-am" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Who <span class="text-red-500">I Am</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ iacobData.whoIAm.subtitle }}
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Left Column - Content -->
          <div>
            <!-- Story -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ iacobData.ui.sections.whoIAm.storyTitle }}</h3>
              <p class="text-gray-600 leading-relaxed mb-6">
                {{ iacobData.whoIAm.story }}
              </p>
            </div>

            <!-- Achievements -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ iacobData.ui.sections.whoIAm.achievementsTitle }}</h3>
              <ul class="space-y-3">
                <li 
                  v-for="achievement in iacobData.whoIAm.achievements" 
                  :key="achievement"
                  class="flex items-start"
                >
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-600">{{ achievement }}</span>
                </li>
              </ul>
            </div>

            <!-- Philosophy -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ iacobData.ui.sections.whoIAm.philosophyTitle }}</h3>
              <p class="text-gray-600 leading-relaxed italic">
                "{{ iacobData.whoIAm.philosophy }}"
              </p>
            </div>
          </div>

          <!-- Right Column - Image -->
          <div class="order-first lg:order-last">
            <div class="relative">
              <div class="w-full aspect-[4/5] max-w-md mx-auto relative overflow-hidden rounded-2xl">
                <img 
                  :src="iacobData.personal.heroImage" 
                  :alt="`${iacobData.personal.name} - Personal Trainer`"
                  class="w-full h-full object-cover"
                />
                <!-- Overlay with credentials -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <div class="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div class="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div class="text-2xl font-bold text-gray-900">{{ iacobData.personal.yearsExperience }}+</div>
                        <div class="text-sm text-gray-600">{{ iacobData.ui.sections.whoIAm.yearsExperienceLabel }}</div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-gray-900">500+</div>
                        <div class="text-sm text-gray-600">{{ iacobData.ui.sections.whoIAm.clientsHelped }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <p class="text-lg text-gray-600 mb-6">
            {{ iacobData.ui.sections.whoIAm.callToActionText }}
          </p>
          <ScheduleButton :text="iacobData.ui.buttons.scheduleConsultation" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iacobData from '../data/iacobData.js'
import ScheduleButton from './ScheduleButton.vue'
</script>

<style scoped>
/* Image aspect ratio */
.aspect-\[4\/5\] {
  aspect-ratio: 4 / 5;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .grid {
    gap: 2rem;
  }

  .aspect-\[4\/5\] {
    aspect-ratio: 3 / 4;
  }
}
</style>
