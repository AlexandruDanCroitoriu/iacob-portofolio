<script setup>
import { onMounted, ref } from 'vue'
import HeaderSection from './components/HeaderSection.vue'
import ImageGallery from './components/ImageGallery.vue'
import CardsSection from './components/CardsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhyMeSection from './components/WhyMeSection.vue'
import WhoIAmSection from './components/WhoIAmSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

// Single Page Application - All UI components are contained within this file
// App logic will be added here as needed

onMounted(() => {
  console.log('App mounted')
})
</script>

<template>
  <div>
    <!-- Fitness Coach Portfolio Website -->
    <HeaderSection class="relative pb-42"/>
    <ImageGallery />
    <div class="relative">
      <CardsSection class="absolute -top-22 left-1/2 -translate-x-1/2 container flex items-center justify-center"/>
    </div>
    <ServicesSection class="pt-62"/>
    <WhyMeSection />
    <WhoIAmSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style scoped>
/* Styles will be added as needed */
</style>
