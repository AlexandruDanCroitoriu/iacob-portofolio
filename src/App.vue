<script setup>
import { onMounted, ref } from 'vue'
import HeaderSection from './components/Header.vue'
import ImageGallery from './components/Galery.vue'
import ServicesSection from './components/Services.vue'
import WhyMeSection from './components/WhyMe.vue'
import WhoIAmSection from './components/WhoIAm.vue'
import ContactSection from './components/Contact.vue'
import FooterSection from './components/Footer.vue'

// Single Page Application - All UI components are contained within this file
// App logic will be added here as needed

onMounted(() => {
  console.log('App mounted')
})
</script>

<template>
  <div class="">
    <!-- Fitness Coach Portfolio Website -->
    <!-- <HeaderSection class="relative pb-42"/> -->
    <ServicesSection class=""/>
    <ImageGallery />
    <WhyMeSection />
    <WhoIAmSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style scoped>
/* Styles will be added as needed */
</style>
