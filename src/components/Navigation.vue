<script setup>
import { ref } from 'vue'

const showMenu = ref(false)
</script>

<template >
  <div class="relative sticky top-4 z-20">
    <button @click="showMenu = !showMenu" class="bg-gray-200/20 backdrop-blur-lg hover:bg-gray-200/30 text-gray-600 hover:text-black flex items-center space-x-4 border border-gray-200 mx-auto w-fit px-4 py-2 rounded-xl   focus:outline-none">
      <img src="/dumbbell.svg" class="w-7" alt="Logo" />
      <h1 class="font-bold text-xl">Iacob</h1>
      <div class="w-6 h-6 flex flex-col justify-center items-center">
        <div class="w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
        :class="showMenu ? 'rotate-45 translate-y-0.5' : 'rotate-0 -translate-y-1'"></div>
        <div class="w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
        :class="showMenu ? 'opacity-0' : 'opacity-100'"></div>
        <div class="w-5 h-0.5 bg-current transition-all duration-300 ease-in-out"
        :class="showMenu ? '-rotate-45 -translate-y-0.5' : 'rotate-0 translate-y-1'"></div>
      </div>
    </button>
   
    <div v-if="showMenu" class="absolute top-full mt-2 sm:left-1/2 transform sm:-translate-x-1/2 left-0 right-0 w-full sm:w-fit bg-white text-gray-600 flex items-center border border-gray-200 w-fit px-4 py-2 rounded-xl shadow-lg z-10">
      <nav>
          <router-link to="/" @click="showMenu = false" class="block text-gray-700 hover:text-blue-600">Home</router-link>
          <router-link to="/schedule" @click="showMenu = false" class="block text-gray-700 hover:text-blue-600">Schedule</router-link>
      </nav>
    </div>
  </div>
</template>


