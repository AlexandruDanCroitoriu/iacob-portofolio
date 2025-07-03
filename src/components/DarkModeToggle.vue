<template>
    <button
        @click.stop="isDark = !isDark"
        class="z-1 ml-4 p-2 rounded-full shadow-md transition-colors duration-300 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
        <span v-if="!isDark" class="flex items-center justify-center text-xl text-yellow-500 transition-transform duration-300 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71-.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </span>
        <span v-else class="flex items-center justify-center text-xl text-blue-400 transition-transform duration-300 transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64 13.65A9 9 0 1110.35 2.36a7 7 0 1011.29 11.29z"/>
            </svg>
        </span>
    </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(true)

function applyDarkMode(value) {
  const element = document.getElementById('html-root')
  
  // Add transition class before making the change
  element.classList.add('transitioning')
  
  if (value) {
    element.classList.add('dark')
  } else {
    element.classList.remove('dark')
  }
  
  // Remove transition class after transition completes
  setTimeout(() => {
    element.classList.remove('transitioning')
  }, 300) // Match the CSS transition duration
}

function toggleDarkMode() {
  localStorage.setItem('darkMode', isDark.value ? 'true' : 'false')
  applyDarkMode(isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  isDark.value = saved === 'true'
  applyDarkMode(isDark.value)
})

// Keep localStorage in sync if isDark changes
watch(isDark, (val) => {
  localStorage.setItem('darkMode', val ? 'true' : 'false')
  applyDarkMode(val)
})
</script>
