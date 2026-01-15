<template>
    <div class="border-t border-secondary p-8 flex justify-center">
        <div class="flex flex-col items-center tablette:w-200">
            <section class="flex flex-wrap items-top gap-15 pb-8 tablette:w-full tablette:justify-between justify-around">
                <div class="flex flex-col text-Foreground/40">
                    <div class="text-Foreground/40 text-sm pb-3">SECTIONS</div>
                    <div class="flex flex-col ml-3 gap-2">
                        <a href="#apropos" class="group p-2 pl-3 pr-3 bg-secondary rounded-lg flex justify-center items-center gap-3 transition duration-400 hover:scale-105 hover:bg-accent/30 ease-in-out">À propos</a>
                        <a href="#projet" class="group p-2 pl-3 pr-3 bg-secondary rounded-lg flex justify-center items-center gap-3 transition duration-400 hover:scale-105 hover:bg-accent/30 ease-in-out">Projets</a>
                        <a href="#contact" class="group p-2 pl-3 pr-3 bg-secondary rounded-lg flex justify-center items-center gap-3 transition duration-400 hover:scale-105 hover:bg-accent/30 ease-in-out">Contact</a>
                    </div>
                </div>
                <div class="flex flex-col text-Foreground/40">
                    <div class="text-Foreground/40 text-sm pb-3">PAGES</div>
                    <div class="flex flex-col ml-3 gap-2">
                        <a href="#" class="group p-2 pl-3 pr-3 bg-secondary rounded-lg flex justify-center items-center gap-3 transition duration-400 hover:scale-105 hover:bg-accent/30 ease-in-out">Tous les projet</a>
                        <a href="/CV_Arsène_Mukinayi.pdf" class="group p-2 pl-3 pr-3 bg-secondary rounded-lg flex justify-center items-center gap-3 transition duration-400 hover:scale-105 hover:bg-accent/30 ease-in-out">Voir le cv</a>
                    </div>
                </div>
                <div>
                    <div class="text-Foreground/40 text-sm pb-3">CONTACTS</div>
                    <ReseauxSociaux/>
                </div>
            </section>
            <section class="flex border-t border-secondary pt-5 w-full">
                <small class="text-Foreground/40"> &#169; 2025 Arsène Mukinayi. Tous droits réservé. <br>Fabled Print</small>
                <div>
    
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import ReseauxSociaux from './collaboration/ReseauxSociaux.vue';
</script>