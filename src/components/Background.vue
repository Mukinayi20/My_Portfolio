<template>
  <canvas ref="canvas" class="star-canvas z-0"></canvas>
</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref(null)
let ctx
let animationId
let stars = []


const CONFIG = {
  desktopCount: 100,
  mobileCount: 70,
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
    const isMoving = Math.random() > 0.5 
    
    stars.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      size: Math.random() * 1.5 + 0.5,

      isMoving: isMoving,
      speedY: (Math.random() - 0.5) * 0.6,

      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI 
    })
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  stars.forEach(star => {
    
    star.phase += star.twinkleSpeed
    const currentOpacity = (Math.sin(star.phase) + 1) / 2 

    
    if (star.isMoving) {
      star.y += star.speedY

      
      if (star.y < 0) star.y = canvas.value.height
      if (star.y > canvas.value.height) star.y = 0
    }

    
    ctx.beginPath()
    ctx.fillStyle = CONFIG.color
    ctx.globalAlpha = currentOpacity 
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    ctx.fill()
  })

  animationId = requestAnimationFrame(animate)
}

function handleResize() {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  createStars() 
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