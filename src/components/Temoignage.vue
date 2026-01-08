<template>
    <div class="desktop:flex desktop:justify-center">
        <div class="desktop:flex desktop:flex-col desktop:items-center desktop:w-400">
            <div class="pl-5 pt-14 flex items-center desktop:w-375 gap-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#00d3f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity-icon lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
                </div>
                <h2 class="text-[2.2rem] text-primary pb-8">Témoignage</h2>
            </div>
            <div v-if="temoignages.length > 0" class="w-full desktop:flex  desktop:flex-wrap desktop:justify-center">
                <Layoutprimary v-for="temoignage in voir" :key="temoignage.id" class="hover:border-accent/50 desktop:w-100 group tablette:w-80 transition-transform duration-800 hover:scale-105 transition-colors hover:bg-gradient-to-r hover:from-[#d8e7e7] hover:to-[#dae9e9] transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(77,159,163,0.20)] ease-in-out">
                    <h3 class="text-lg text-primary">{{ temoignage.fullName }}</h3>
                    <p class="text-base text-mutedForeground">{{ temoignage.metier }} · {{ temoignage.entreprise }}</p>
                    <p class=" text-mutedForeground pt-3">"{{ temoignage.commentaire }}"</p>
                    <div class="text-mutedForeground pt-3">{{ formatDate(temoignage.date) }}</div>
                </Layoutprimary>
            </div>
            <div v-else>
                <p class="text-center text-lg text-mutedForeground pt-1 desktop:w-180">Il n'y a pas de temoignage disponible pour le moment, mais si mon travail vous a plus vous pouvez toujours ajouter un témoignage en cliquant sur le bouton "Laisser un témoignage". Merci !</p>
            </div>
    
            <div class="flex flex-col items-center gap-6 pt-8">
                <div v-if="temoignages.length > 3" class="z-1">
                    <Button @click="showAll = !showAll" extra-class="flex items-center gap-3 bg-background border-secondary hover:border-[#00d3f2]/40 w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#41494F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                        <template #btn-primary>Voir plus</template>
                    </Button>
                </div>
                <Button extra-class="flex items-center gap-3 bg-[#00d3f2]/10 border-[#00d3f2]/40 hover:bg-[#00d3f2]/20 w-max">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#41494F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    <template #btn-primary>Laisser un témoignage</template>
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Layoutprimary from './Layoutprimary.vue';
import Button from './Button.vue';
import { formatDate, voirPlusMooin } from '@/js/config';

const temoignages = ref([
    {id: 1, fullName: 'Lucas Dubois', metier: 'Product Manager', entreprise: 'Digital Solutions', commentaire: 'Collaboration fluide et résultats impressionnants. Le projet a été livré dans les délais avec une qualité supérieure à nos attentes.', date: new Date()},
    {id: 2, fullName: 'Sophie Martin', metier: 'CEO', entreprise: 'TechStart', commentaire: 'Un travail exceptionnel! La qualité du code et l\'attention aux détails sont remarquables. Je recommande vivement pour tout projet web.', date: new Date()},
    {id: 3, fullName: 'Emma Bernard', metier: 'Designer', entreprise: 'Creative Studio', commentaire: 'Excellente compréhension des besoins design. L\'interface est fluide et l\'expérience utilisateur est au top!', date: new Date()},
    {id: 4, fullName: 'Julie Moreau', metier: 'Marketing Director', entreprise: 'Brand Agency', commentaire: 'Notre site web a été transformé! Performance optimale et design moderne. Merci pour ce travail de qualité.', date: new Date()},
    {id: 5, fullName: 'Thomas Petit', metier: 'CTO', entreprise: 'InnovTech', commentaire: 'Code propre et maintenable. Une vraie expertise technique avec une approche professionnelle du développement.', date: new Date()},
])


const showAll = ref(false)

const voir = voirPlusMooin(temoignages, showAll)

</script>