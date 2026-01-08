<template>
  <canvas ref="canvas" class="star-canvas z-0"></canvas>
</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref(null)
let ctx
let animationId
let stars = []

// Configuration
const CONFIG = {
  desktopCount: 300,
  mobileCount: 100,
  color: '#4c9ea2',
  mobileBreakpoint: 768
}

function getStarCount() {
  return window.innerWidth < CONFIG.mobileBreakpoint 
    ? CONFIG.mobileCount 
    : CONFIG.desktopCount
}

function createStars() {
  const count = getStarCount()
  stars = []

  for (let i = 0; i < count; i++) {
    const isMoving = Math.random() > 0.5 // 50% de chance d'être mobile
    
    stars.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      size: Math.random() * 1.5 + 0.5,
      // Pour le mouvement
      isMoving: isMoving,
      speedY: (Math.random() - 0.5) * 0.6, // Vitesse positive ou négative (monte ou descend)
      // Pour le scintillement
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI // Pour un scintillement fluide
    })
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  stars.forEach(star => {
    // 1. Logique de scintillement (pour toutes les étoiles)
    star.phase += star.twinkleSpeed
    const currentOpacity = (Math.sin(star.phase) + 1) / 2 // Oscille entre 0 et 1

    // 2. Logique de mouvement (seulement pour les étoiles mobiles)
    if (star.isMoving) {
      star.y += star.speedY

      // Reset si sort de l'écran (vertical)
      if (star.y < 0) star.y = canvas.value.height
      if (star.y > canvas.value.height) star.y = 0
    }

    // 3. Dessin
    ctx.beginPath()
    ctx.fillStyle = CONFIG.color
    ctx.globalAlpha = currentOpacity // Applique le scintillement
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    ctx.fill()
  })

  animationId = requestAnimationFrame(animate)
}

function handleResize() {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  createStars() // Recréer les étoiles pour ajuster le nombre au nouvel écran
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')

  handleResize()
  animate()

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
})
</script>