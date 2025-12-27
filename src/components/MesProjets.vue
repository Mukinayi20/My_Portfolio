<template>
    <div class="bg-bgMesprojet p-8 pb-15 flex flex-col justify-center">
        <TitleCard className="flex items-center flex-col gap-5 mt-5">Projets Sélectionnés</TitleCard>
        <div>
            <ComposantProjet></ComposantProjet>
        </div>
    </div>
</template>

<script setup>
import TitleCard from './TitleCard.vue';
import ComposantProjet from './ComposantProjet.vue';
</script>