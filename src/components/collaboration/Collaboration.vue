<template>
    <div>
        <TitleCard className="flex items-center flex-col gap-5 pb-6">
            Travaillons ensemble
        </TitleCard>
    </div>
    <div class="p-8 flex flex-col items-center">
        <p class="text-center text-lg text-mutedForeground desktop:w-210 ">Ouvert à de nouveaux projets et collaborations, je suis disponible pour échanger et étudier ensemble des solutions adaptées à vos besoins.</p>
    </div>
    <div class="flex flex-wrap justify-center gap-4 pt-5 pb-15">
        <a href="mailto:arsenemukinayi20@gmail.com" target="_blank" alt="me faire un mail">
            <Button extraClass="bg-primary text-primaryForeground hover:opacity-80">
                <template #btn-primary>Me faire un mail</template>
            </Button>
        </a>
        <a href="tel:+243821600256">
            <Button extraClass="bg-primaryForeground border-secondary hover:bg-secondary">
                <template #btn-primary>M'appeler</template>
            </Button>
        </a>
        <Button extraClass="bg-primaryForeground border-secondary hover:bg-secondary">
            <template #btn-primary>Message WhatsApp</template>
        </Button>
    </div>
    <div>
        <ReseauxSociaux/>
    </div>
</template>

<script setup>
import TitleCard from '../TitleCard.vue';
import ReseauxSociaux from './ReseauxSociaux.vue';
import Button from '../Button.vue';
</script>