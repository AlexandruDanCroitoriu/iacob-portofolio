<script setup>
import { onMounted, ref } from 'vue'
import HeaderSection from './components/HeaderSection.vue'
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
    <HeaderSection />
    <CardsSection />
    <ServicesSection />
    <WhyMeSection />
    <WhoIAmSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style scoped>
/* Styles will be added as needed */
</style>
