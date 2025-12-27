<template>
<a :download="download" :href="link" class="p-2 w-10 rounded-lg bg-secondary">
    <img :src="icon" :alt="icon">
</a>
</template>

<script setup>
defineProps({
    link: String,
    icon: String,
    download: String
})
</script>