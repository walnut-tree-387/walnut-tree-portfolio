<template>
  <div class="w-full py-15 px-4 flex flex-col items-center gap-8">
    <h2
      class="text-xl font-bold border-b border-dashed border-gray-800 pb-4 w-full max-w-5xl text-center"
    >
      Certifications
    </h2>

    <div
      class="grid gap-6 w-full max-w-5xl
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3"
    >
      <PortfolioCertificate
        v-for="cert in paginatedCertificates"
        :key="cert.title"
        :details="cert"
        class="cert-card"
      />
    </div>
    <div class="flex gap-4 mt-15 items-center text-primary font-primary">
      <Button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 text-sm border rounded disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Previous
      </Button>

      <span class="text-sm font-medium">
        Page {{ currentPage }} of {{ totalPages }}
      </span>

      <Button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 text-sm border rounded
               disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </Button>
    </div>
  </div>
</template>


<script lang="ts" setup>
const gsap = useGSAP()
const certificateList = ref([
  {
    title: 'Neo4j Fundamentals',
    link: 'https://graphacademy.neo4j.com/c/3edc1411-f033-4869-84d7-3a22b5b1234a/',
    skills: ['Neo4j'],
    image: 'Neo4j_Fundamentals.png'
  },
  {
    title: 'Neo4j & Generative AI Fundamentals',
    link: 'https://graphacademy.neo4j.com/c/f1b432c4-65a5-4764-a361-65163abe3972/',
    skills: ['Generative AI', 'RAG', 'Knowledge Graph'],
    image: 'Neo4j_GenAi_Fundamentals.png'
  },
  {
    title: 'IUBAT-National Collegiate Programming Contest',
    skills: ['Programming', 'NCPC'],
    image: 'iubat-ncpc.jpg'
  },
  {
    title: 'Cypher Fundamentals',
    link: 'https://graphacademy.neo4j.com/c/b5276e6a-a0df-4af7-9c38-67e3f25c48af/',
    skills: ['Cypher'],
    image: 'cypher-fundamentals.png'
  },
  {
    title: 'Inter Departmental Programming Contest',
    skills: ['Programming', 'IDPC'],
    image: 'idpc.jpg'
  }
])

const itemsPerPage = 3
const currentPage = ref(1)

const totalPages = computed(() =>
  Math.ceil(certificateList.value.length / itemsPerPage)
)

const paginatedCertificates = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return certificateList.value.slice(start, start + itemsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
const animateCards = async () => {
  await nextTick()

  gsap.fromTo(
    '.cert-card',
    {
      opacity: 0,
      y: 30,
      z: 10,
      scale: 0.25,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 'random(10, -50)',
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.12,
      clearProps: 'all',
    }
  )
}

onMounted(() => {
  animateCards()
})

watch(currentPage, () => {
  animateCards()
})
</script>
