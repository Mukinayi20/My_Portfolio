<template>
  <canvas ref="canvas" class="star-canvas"></canvas>
</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref(null)
let ctx
let animationId
let stars = []

const STAR_COUNT = 150

function resizeCanvas() {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

function createStars() {
  stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * canvas.value.width,
    y: Math.random() * canvas.value.height,
    size: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.5 + 0.2
  }))
}

function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  stars.forEach(star => {
    star.y += star.speed

    if (star.y > canvas.value.height) {
      star.y = 0
      star.x += (mouseX - canvas.value.width / 2) * 0.00001
    }

    ctx.fillStyle = '#4c9ea2'
    ctx.fillRect(star.x, star.y, star.size, star.size)
  })

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')

  resizeCanvas()
  createStars()
  animate()

  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeCanvas)
})

let mouseX = 0

window.addEventListener('mousemove', e => {
  mouseX = e.clientX
})
</script>