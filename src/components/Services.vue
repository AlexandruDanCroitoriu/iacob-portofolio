<template>
  <section id="services" class="pt-20 pb-16 bg-black">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ iacobData.ui.sections.services.title.split(" ")[0] }}
          <span class="text-red-500">{{
            iacobData.ui.sections.services.title.split(" ")[1]
          }}</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          {{ iacobData.ui.sections.services.subtitle }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="flex flex-col lg:flex-row gap-6 items-stretch w-full">
        <div
          v-for="service in iacobData.services"
          :key="service.id"
          :id="`service-${service.id}`"
          class="divide-y divide-white/10 overflow-hidden rounded-lg bg-gray-800/50 outline-1 -outline-offset-1 outline-white/10 w-full flex flex-col"
        >
          <!-- Header Section -->
          <div class="px-4 py-5 sm:px-6">
            <!-- Service Title -->
            <h3 class="text-2xl font-bold text-white text-center">
              {{ service.title }}
            </h3>

            <!-- Service subtitle -->
            <h5 class="text-sm text-gray-400 mt-2 text-center">
              {{ service.subtitle }}
            </h5>
          </div>

          <!-- Body Section -->
          <div class="px-4 py-5 sm:p-6 flex-1">
            <!-- Service short Description -->
            <p class="text-gray-100 text-start leading-relaxed whitespace-pre-wrap">
              {{ service.shortDescription }}
            </p>
          </div>

          <!-- Footer Section -->
          <div class="px-4 py-5 sm:p-6">
            <!-- Action Buttons -->
            <div class="flex flex-col gap-3 justify-between items-center sm:flex-row lg:flex-col xl:flex-row">
              <ScheduleButton
                :text="`${iacobData.ui.buttons.bookNow}`"
                :service-url="service.scheduleUrl"
              />
              <button
                @click="openModal(service)"
                class="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 font-semibold"
              >
                {{ iacobData.ui.buttons.seeDetails }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Popup -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedService"
          class="fixed inset-0 z-50 bg-black/95"
          @click.self="closeModal"
        >
          <div class="bg-gray-900 w-full h-full overflow-hidden flex flex-col">
            <!-- Modal Header -->
            <div class="bg-gray-800 px-6 py-2 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
              <h2 class="text-2xl md:text-3xl font-bold text-white">
                {{ selectedService.title }}
              </h2>
              <button
                @click="closeModal"
                class="text-gray-400 hover:text-white transition-colors p-2"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Modal Body -->
            <div class="overflow-y-auto flex-1 px-6 md:px-12 lg:px-24 py-8">
              <div v-if="selectedService.details" class="max-w-5xl mx-auto">
                <!-- Service Details Title -->
                <h3 class="text-xl md:text-2xl font-bold text-red-500 mb-6">
                  {{ selectedService.details.title }}
                </h3>

                <!-- Service Sections -->
                <div class="space-y-8">
                  <div
                    v-for="(section, index) in selectedService.details.sections"
                    :key="index"
                    class="bg-gray-800/50 rounded-lg p-6"
                  >
                    <!-- Section Title -->
                    <h4 class="text-lg md:text-xl font-bold text-white mb-3">
                      {{ section.title }}
                    </h4>

                    <!-- Section Description -->
                    <p class="text-gray-300 mb-4 leading-relaxed">
                      {{ section.description }}
                    </p>

                    <!-- Highlights List -->
                    <ul v-if="section.highlights && section.highlights.length > 0" class="space-y-2 mb-4">
                      <li
                        v-for="(highlight, hIndex) in section.highlights"
                        :key="hIndex"
                        class="flex items-start text-gray-200"
                      >
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>{{ highlight }}</span>
                      </li>
                    </ul>

                    <!-- Note -->
                    <p v-if="section.note" class="text-sm text-gray-400 italic border-l-4 border-red-500 pl-4">
                      {{ section.note }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="bg-gray-800 px-6 md:px-12 lg:px-24 py-2 border-t border-gray-700 flex flex-col sm:flex-row gap-3 justify-end flex-shrink-0">
              <button
                @click="closeModal"
                class="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 font-semibold"
              >
                Close
              </button>
              <ScheduleButton
                class="ml-auto"
                :text="`${iacobData.ui.buttons.bookNow} ${selectedService.title}`"
                :service-url="selectedService.scheduleUrl"
                />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import iacobData from "../data/iacobData.js";
import ScheduleButton from "./ScheduleButton.vue";

const selectedService = ref(null);

const openModal = (service) => {
  selectedService.value = service;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedService.value = null;
  document.body.style.overflow = '';
};

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

.hover\:bg-zinc-750:hover {
  background-color: #27272a;
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

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
}

.modal-enter-to > div,
.modal-leave-from > div {
  transform: scale(1);
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
