<template>
  <div ref="dateTime" class="text-sm text-black dark:text-white font-mono select-none">
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
const gsap = useGSAP();

const dateTime = ref<HTMLElement | null>(null)
const formattedDateTime = ref('')

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function formatDateTime(date: Date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${day} ${month}, ${year} ${hours}:${minutes}`
}

function updateTime() {
  const now = new Date()
  formattedDateTime.value = formatDateTime(now)
}

function animateText(text: string) {
  if (!dateTime.value) return
  dateTime.value.textContent = ''

  const chars = text.split('')
  let i = 0

  function addChar() {
    if (i < chars.length) {
      dateTime.value!.textContent += chars[i]
      i++
      setTimeout(addChar, 50)
    } else {
      gsap.fromTo(
        dateTime.value,
        { opacity: 0.5, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      )
    }
  }
  addChar()
}

onMounted(() => {
  updateTime()
  const interval = setInterval(() => {
    updateTime()
  }, 60000)

  onUnmounted(() => clearInterval(interval))
})

watch(formattedDateTime, (newVal) => {
  animateText(newVal)
})
</script>