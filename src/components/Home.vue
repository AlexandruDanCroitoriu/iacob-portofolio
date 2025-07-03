<template>
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Welcome to Iacob's Portfolio
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Fitness Trainer & Wellness Expert
      </p>
      <div class="flex justify-center">
        <img src="/dumbbell.svg" class="w-20 h-20" alt="Fitness Logo" />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
        <p class="text-gray-600 leading-relaxed">
          I'm a passionate fitness trainer dedicated to helping you achieve your health and wellness goals. 
          With years of experience in personal training, nutrition guidance, and wellness coaching, 
          I create personalized programs that fit your lifestyle and objectives.
        </p> 
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">My Services</h2>
        <ul class="text-gray-600 space-y-2">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Personal Training Sessions
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Nutrition Consultation
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Fitness Program Design
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Group Fitness Classes
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
      <h2 class="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
      <p class="text-lg mb-6">
        Let's work together to achieve your fitness goals and build a healthier, stronger you.
      </p>
      <router-link 
        to="/schedule" 
        class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
      >
        Schedule a Consultation
      </router-link>
    </div>
</template>

<script setup>
// Home page component
</script>

<style scoped>
</style>
