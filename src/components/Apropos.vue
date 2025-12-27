<template>
<div class="bg-bdApropos flex flex-col justify-center items-center">
    <div class="flex items-center flex-col gap-4 mt-20 p-8">
        <div>
            <TitleCard className="flex items-center flex-col gap-4">À propos</TitleCard>
        </div>
        <p class="text-center text-lg text-mutedForeground pt-15 desktop:w-180">Je développe des solutions numériques full stack à partir de besoins concrets. De l’analyse à la mise en production, je conçois des interfaces fluides et performantes, pensées pour simplifier les usages, automatiser les processus et faire gagner du temps, tout en créant une réelle valeur business</p>
    </div>
        <CardAPropos class="mt-15 desktop:w-180">
            <div class="flex justify-between flex-col">
                <div class="flex justify-between">
                    <h2 class="text-primary text-2xl font-medium">Résumé</h2>
                    <div class="flex gap-4">
                        <Link icon="icone/view.png" link="/CV_Arsène_Mukinayi.pdf"/>
                        <Link icon="icone/download.png" link="/CV_Arsène_Mukinayi.pdf" download="/CV_Arsène_Mukinayi.pdf"/>
                    </div>
                </div>
                <div>
                    <p class="text-lg text-mutedForeground pt-10">"Développeur Full Stack et architecte de solutions web, je me spécialise dans la conception d'interfaces modernes et d'architectures numériques robustes. Fort d'une expertise technique centrée sur TypeScript, Node.js et l'écosystème JavaScript (AdonisJS), je m'attache à transformer des concepts complexes en applications fluides, alliant une rigueur backend pointue à une élégance frontend soignée."</p>

                    <p class="text-lg text-mutedForeground pt-10">"Passionné par la création d'expériences utilisateur intuitives, je privilégie un design minimaliste couplé à des performances optimales. Mon approche repose sur une volonté constante d'innovation : je m'efforce de concevoir des produits qui non seulement résolvent des problématiques concrètes, mais qui dépassent les attentes des utilisateurs en offrant une solution à forte valeur ajoutée."</p>
                </div>
            </div>
            <div class="flex flex-wrap gap-2 pt-10 pb-2">
                <Cardtech  v-for="tech in techs">{{ tech }}</Cardtech>
            </div>
        </CardAPropos>
        <div class="mt-20 mb-25 w-full tablette:flex tablette:flex-wrap tablette:justify-center">
            <CardAPropos auther-class="hover:border-accent/30 tablette:w-80">
                <CardPrimary icone="icone/code.png"/>
                <ContentCard>
                    <template #head>Développement</template>
                    <template #main>Vue.js, Adonis.js, Typescript, Node.js</template>
                </ContentCard>
            </CardAPropos>
            <CardAPropos auther-class="hover:border-accent/30 tablette:w-80">
                <CardPrimary icone="icone/color-palette.png"/>
                <ContentCard>
                    <template #head>Design</template>
                    <template #main>UI/UX, Design Systems</template>
                </ContentCard>
            </CardAPropos>
            <CardAPropos auther-class="hover:border-accent/30 tablette:w-80">
                <CardPrimary icone="icone/thunderbolt.png"/>
                <ContentCard>
                    <template #head>Performance</template>
                    <template #main>Performance & Accessibilité</template>
                </ContentCard>
            </CardAPropos>
        </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

import Cardtech from './Cardtech.vue';
import Link from './Link.vue';
import CardAPropos from './Layoutprimary.vue';
import CardPrimary from './CardPrimary.vue';
import ContentCard from './ContentCard.vue';
import TitleCard from './TitleCard.vue';


const techs = ref(['Adonis.js', 'Vue.js', 'TypeScrip', 'Node.js', 'JavaScript', 'UI/UX Design'])
</script>