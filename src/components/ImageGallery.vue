<template>
  <section id="gallery" class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          <span class="text-red-500">Gallery</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Witness the transformation journey and dedication in every workout
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="(image, index) in displayedImages" 
            :key="index"
            class="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            @click="openModal(index)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- See More Button -->
        <div v-if="galleryImages.length > 8" class="text-center mt-12">
          <button 
            @click="openGalleryDialog"
            class="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center mx-auto gap-2"
          >
            <span>See More Photos ({{ galleryImages.length - 8 }} more)</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <div class="relative max-w-4xl max-h-full">
          <!-- Close Button -->
          <button 
            @click="closeModal"
            class="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-200"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Navigation Buttons -->
          <button 
            @click.stop="previousImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors duration-200 bg-black/50 rounded-full p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button 
            @click.stop="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors duration-200 bg-black/50 rounded-full p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Modal Image -->
          <img 
            :src="getCurrentModalImage()?.src" 
            :alt="getCurrentModalImage()?.alt"
            class="max-w-full max-h-full object-contain rounded-lg"
            @click.stop
          />

          <!-- Image Counter -->
          <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-center">
            <span class="text-sm">{{ getModalImageIndex() }} / {{ getModalTotalImages() }}</span>
          </div>
        </div>
      </div>

      <!-- Gallery Dialog Modal -->
      <div 
        v-if="isGalleryDialogOpen" 
        class="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
        @click="closeGalleryDialog"
      >
        <div class="min-h-screen p-4">
          <!-- Dialog Header -->
          <div class="sticky top-0 bg-black/90 backdrop-blur-sm z-10 py-4 mb-8">
            <div class="flex justify-between items-center max-w-7xl mx-auto">
              <div>
                <h3 class="text-2xl md:text-3xl font-bold text-white">
                  Complete <span class="text-red-500">Gallery</span>
                </h3>
                <p class="text-gray-300 text-sm">{{ galleryImages.length }} photos</p>
              </div>
              <button 
                @click="closeGalleryDialog"
                class="text-white hover:text-red-500 transition-colors duration-200 p-2 rounded-full bg-black/50"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Full Gallery Grid -->
          <div class="max-w-7xl mx-auto" @click.stop>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div 
                v-for="(image, index) in galleryImages" 
                :key="index"
                class="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                @click="openModalFromDialog(index)"
              >
                <img 
                  :src="image.src" 
                  :alt="image.alt"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- Image Number Badge -->
                <div class="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {{ index + 1 }}
                </div>
              </div>
            </div>
          </div>

          <!-- Dialog Footer -->
          <div class="text-center mt-12 pb-8">
            <button 
              @click="closeGalleryDialog"
              class="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Close Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Reactive data
const isModalOpen = ref(false)
const isGalleryDialogOpen = ref(false)
const currentImageIndex = ref(0)
const showFullGallery = ref(false)

// Generate gallery images array
const galleryImages = ref([])

// Computed property for displayed images (always show first 8 in main view)
const displayedImages = computed(() => {
  return galleryImages.value.slice(0, 8)
})

// Import all images using Vite's glob import
const imageModules = import.meta.glob('../assets/images/*.jpeg', { eager: true })

// Generate images array on component mount
onMounted(() => {
  // Convert the glob import object to an array
  const imageEntries = Object.entries(imageModules)
  
  // Sort by filename to ensure correct order
  imageEntries.sort(([a], [b]) => {
    const getImageNumber = (path) => {
      const filename = path.split('/').pop()
      const match = filename.match(/image(\d+)\.jpeg/)
      return match ? parseInt(match[1]) : 0
    }
    return getImageNumber(a) - getImageNumber(b)
  })

  // Map to gallery images format
  imageEntries.forEach(([path, module], index) => {
    galleryImages.value.push({
      src: module.default,
      alt: `Alexandru Iacob Training Photo ${index + 1}`
    })
  })
})

// Gallery toggle function
const toggleFullGallery = () => {
  showFullGallery.value = !showFullGallery.value
}

// Gallery dialog functions
const openGalleryDialog = () => {
  isGalleryDialogOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeGalleryDialog = () => {
  isGalleryDialogOpen.value = false
  document.body.style.overflow = 'auto'
}

// Modal functions
const openModal = (index) => {
  currentImageIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const openModalFromDialog = (index) => {
  currentImageIndex.value = index
  isModalOpen.value = true
  // Keep gallery dialog open in background
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  const totalImages = isGalleryDialogOpen.value ? galleryImages.value.length : displayedImages.value.length
  currentImageIndex.value = (currentImageIndex.value + 1) % totalImages
}

const previousImage = () => {
  const totalImages = isGalleryDialogOpen.value ? galleryImages.value.length : displayedImages.value.length
  currentImageIndex.value = currentImageIndex.value === 0 
    ? totalImages - 1 
    : currentImageIndex.value - 1
}

// Helper functions for modal
const getCurrentModalImage = () => {
  const images = isGalleryDialogOpen.value ? galleryImages.value : displayedImages.value
  return images[currentImageIndex.value]
}

const getModalImageIndex = () => {
  return currentImageIndex.value + 1
}

const getModalTotalImages = () => {
  return isGalleryDialogOpen.value ? galleryImages.value.length : displayedImages.value.length
}

// Keyboard navigation
const handleKeyPress = (event) => {
  if (isModalOpen.value) {
    switch (event.key) {
      case 'Escape':
        closeModal()
        break
      case 'ArrowRight':
        nextImage()
        break
      case 'ArrowLeft':
        previousImage()
        break
    }
  } else if (isGalleryDialogOpen.value) {
    switch (event.key) {
      case 'Escape':
        closeGalleryDialog()
        break
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
  document.body.style.overflow = 'auto'
  isModalOpen.value = false
  isGalleryDialogOpen.value = false
})
</script>

<style scoped>
/* Smooth transitions */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom aspect ratio */
.aspect-square {
  aspect-ratio: 1 / 1;
}

/* Modal backdrop blur effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Responsive grid adjustments */
@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* Button hover effects */
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Gallery Dialog Styles */
.gallery-dialog {
  backdrop-filter: blur(8px);
}

/* Custom scrollbar for gallery dialog */
.gallery-dialog::-webkit-scrollbar {
  width: 8px;
}

.gallery-dialog::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
}

.gallery-dialog::-webkit-scrollbar-thumb {
  background: rgba(239, 68, 68, 0.5);
  border-radius: 4px;
}

.gallery-dialog::-webkit-scrollbar-thumb:hover {
  background: rgba(239, 68, 68, 0.7);
}

/* Sticky header backdrop */
.sticky {
  backdrop-filter: blur(8px);
}
</style>
