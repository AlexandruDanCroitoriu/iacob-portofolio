<script setup>
import Navbar from './components/Navigation.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'
</script>

<template>
  <div class="container mx-auto px-4 py-2 max-w-4xl bg-">
    <Navbar />
    <DarkModeToggle class="fixed top-5 right-5 z-10"/>
    <router-view />
  </div>
</template>
