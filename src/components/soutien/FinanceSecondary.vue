<template>
    <h4 class="text-2xl text-primary pb-8 dark:text-primary/80">Soutenez-moi financèrement</h4>
    <div class="flex flex-wrap gap-5 justify-center dark:text-primary/80">
        <Button extraClass="border-secondary hover:border-accent text-primary hover:text-accent focus:bg-accent focus:text-card">
            <template #btn-primary>5$</template>
        </Button>
        <Button extraClass="border-secondary hover:border-accent text-primary hover:text-accent focus:bg-accent focus:text-card">
            <template #btn-primary>10$</template>
        </Button>
        <Button extraClass="border-secondary hover:border-accent text-primary hover:text-accent focus:bg-accent focus:text-card">
            <template #btn-primary>25$</template>
        </Button>
        <Button extraClass="border-secondary hover:border-accent text-primary hover:text-accent focus:bg-accent focus:text-card">
            <template #btn-primary>50$</template>
        </Button>
        <Button extraClass="border-secondary hover:border-accent text-primary hover:text-accent focus:bg-accent focus:text-card">
            <template #btn-primary>
                100$
            </template>
        </Button>
        <Button extraClass="group border-secondary flex items-center gap-2 hover:border-accent">
            <template #btn-primary>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke=currentColor stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus text-primary group-hover:text-accent"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                <p class="text-primary group-hover:text-accent">Auter montant</p>
            </template>
        </Button>
        <Button extraClass="w-full border-none bg-accent hover:bg-accent/97 text-card dark:text-primary/80">
            <template #btn-primary>
                Envoyer le soutien
            </template>
        </Button>
    </div>
</template>

<script setup>
import Button from '../Button.vue';

</script>