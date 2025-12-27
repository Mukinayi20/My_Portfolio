<template>
<div v-if="projets.length > 0">

</div>
<div v-else class="text-center text-lg text-mutedForeground pt-15 flex flex-col items-center">
    <h1 class="desktop:w-210">Cette section est momentanement indisponible. Vous pouvez consulter ma page <a href="https://github.com/Mukinayi20" class="no-underline hover:underline text-blue-600" target="_blank">Github</a> si besoin. Merci !</h1>
</div>
</template>

<script setup>
import { ref } from 'vue';

const projets = ref([])
</script>