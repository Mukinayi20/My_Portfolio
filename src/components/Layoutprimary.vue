<template>
    <div class="p-6 m-5 border-xl border border-secondary rounded-2xl bg-bgPrimary z-1" :class="autherClass">
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    autherClass: String
})
</script>