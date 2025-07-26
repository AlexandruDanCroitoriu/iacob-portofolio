<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span class="text-red-500">Contact</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ iacobData.contact.subtitle }}
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16">
          
          <!-- Left Column - Map -->
          <div>
            <div class="bg-gray-100 rounded-2xl p-2 h-[400px] md:h-[500px]">
              <div class="w-full h-full rounded-xl overflow-hidden">
                <iframe
                  :src="iacobData.contact.mapEmbedUrl"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-xl"
                  title="Gym Location"
                ></iframe>
              </div>
            </div>
          </div>

          <!-- Right Column - Contact Information -->
          <div class="space-y-8">
            
            <!-- Contact Details -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <!-- Address -->
              <div class="flex items-start mb-6">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Address</h4>
                  <p class="text-gray-600">
                    {{ iacobData.contact.address.street }}<br>
                    {{ iacobData.contact.address.city }}, {{ iacobData.contact.address.state }} {{ iacobData.contact.address.zip }}<br>
                    {{ iacobData.contact.address.country }}
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start mb-6">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p class="text-gray-600">{{ iacobData.personal.phone }}</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start mb-6">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                  <p class="text-gray-600">{{ iacobData.personal.email }}</p>
                </div>
              </div>
            </div>

            <!-- Working Hours -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Working Hours</h3>
              <div class="space-y-3">
                <div 
                  v-for="schedule in iacobData.contact.workingHours" 
                  :key="schedule.day"
                  class="flex justify-between items-center py-2 border-b border-gray-200"
                >
                  <span class="font-medium text-gray-900">{{ schedule.day }}</span>
                  <span class="text-gray-600">{{ schedule.hours }}</span>
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="pt-4">
              <ScheduleButton text="BOOK YOUR SESSION" />
            </div>
          </div>
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
/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .grid {
    gap: 2rem;
  }

  .h-\[400px\] {
    height: 300px;
  }
}
</style>
