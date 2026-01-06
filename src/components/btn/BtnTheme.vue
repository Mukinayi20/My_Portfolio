<template>
    <button @click="toggleTheme" class="group w-10 flex justify-center items-center bg-secondary rounded-xl transition duration-400 hover:bg-primary/18 hover:scale-110">
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#363b3f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon transition-transform duration-300 group-hover:-rotate-12"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#363b3f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-dim-icon lucide-sun-dim transition-transform duration-300  group-hover:rotate-180"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.657 6.343h.01"/><path d="M17.657 17.657h.01"/><path d="M6.343 17.657h.01"/><path d="M6.343 6.343h.01"/></svg>
    </button>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)
onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    }else {
        isDark.value = false
        document.documentElement.classList.remove('dark')
    }
})

const toggleTheme = () => {
    isDark.value = !isDark.value
  
    if(isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}
</script>