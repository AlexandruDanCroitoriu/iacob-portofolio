<script setup>
import Navbar from './components/Navigation.vue'
// import DarkModeToggle from './components/DarkModeToggle.vue'
</script>

<template>
  <div class="container mx-auto max-w-4xl">
    <Navbar class="absolute top-0"/>
    <!-- <DarkModeToggle class="fixed top-5 right-5 z-10"/> -->
    <router-view />
  </div>
</template>
