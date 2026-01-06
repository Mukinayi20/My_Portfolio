<template>
    <div  id="projet" class="pt-10">
        <div class="bg-bgMesprojet p-8 pb-15 flex flex-col justify-center">
            <TitleCard className="flex items-center flex-col gap-5 mt-5">Projets Sélectionnés</TitleCard>
            <div class="z-1">
                <ComposantProjet></ComposantProjet>
            </div>
        </div>
    </div>
</template>

<script setup>
import TitleCard from '../TitleCard.vue';
import ComposantProjet from './ComposantProjet.vue';
</script>