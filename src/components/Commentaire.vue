<template>
    <div class="pb-15 flex flex-col justify-center">
        <div class="pt-20">
            <TitleCard src="icone/chat-bubble.png" className="flex items-center flex-col gap-5 pb-10">
                Commentaire
            </TitleCard>
        </div>
        <div class="flex justify-center">
            <Button src="icone/plus.png" extra-class="flex items-center gap-3 bg-Foreground/10 border-none hover:bg-[#00d3f2]/15 w-max">
                <template #btn-primary >Ajouter un commentaire</template>
            </Button>
        </div>
        <div class="flex justify-center">
            <div class="w-210">
                <h3 class="tablette:pl-25 tablette:text-2xl pb-5 text-xl p-8 text-Foreground"><strong>*</strong> Tous les commentaires</h3>
            </div>
        </div>
        <div v-if="commentaires.length > 0" class="flex flex-col items-center">
            <div class="desktop:w-210 flex flex-col justify-center">
                <Layoutprimary v-for="commentaire in voir" :key="commentaire.id" class="hover:border-accent/50">
                    <div class="flex justify-between">
                        <h3 class="text-lg text-primary">{{ commentaire.fullname }}</h3> <div class="text-mutedForeground flex items-center text-sm">{{ formatDate(commentaire.date) }}</div>
                    </div>
                    <p class="pt-5 text-primary">"{{ commentaire.commentaire }}"</p>
                </Layoutprimary>
            </div>
            <div v-if="commentaires.length > 3" class="flex justify-center">
                <Button @click="showAll = !showAll" src="icone/down-arrow.png" extra-class="flex items-center gap-3 bg-background border-secondary hover:border-[#00d3f2]/40 w-max">
                    <template #btn-primary>Voir plus</template>
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import TitleCard from './TitleCard.vue';
import Button from './Button.vue';
import Layoutprimary from './Layoutprimary.vue';
import { formatDate, voirPlusMooin } from '@/js/config';


const commentaires = ref([
    {id: 1, fullname: 'Marie Dubois', commentaire: 'Excellent travail! J\'adore le design minimaliste et la fluidité de la navigation.', date: new Date()},
    {id: 2, fullname: 'Jean Martin', commentaire: 'Portfolio très impressionnant. Les projets sont présentés de manière très professionnelle.', date: new Date()},
    {id: 3, fullname: 'Sophie Laurent', commentaire: 'L\'animation de la photo de profil au scroll est vraiment réussie. Bravo!', date: new Date()},
    {id: 4, fullname: 'Rose Mukinayi', commentaire: 'Tu as fais du très bon travail j\'apprecie ton sens du detail. Merci !', date: new Date()},
    {id: 4, fullname: 'Elyse Mukinayi', commentaire: 'J\'apprecie beaucoup ton travail, is perfect. Merci !', date: new Date()},
])

const showAll = (false)

const voir = voirPlusMooin(commentaires, showAll)

</script>