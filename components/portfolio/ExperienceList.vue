<template>
  <div class="relative flex flex-col justify-center items-center top-15">
    <span class="text-xl w-full text-center font-bold border-b border-dashed border-gray-800 pb-4">Work Experience</span>
    <PortfolioExperience
      v-for="company in companyList"
      :key="company.companyName"
      :details="company"
      />
  </div>
</template>

<script setup lang="ts">
const companyList = ref([
    {
      companyName: 'Anwar Enterprise LTD.',
      period: 'Jan 2023 - Present',
      skills: ['Java 17+', 'Microservices', 'Pub-Sub', 'Debezium (CDC)', 'Elasticsearch', 'Query DSL', 'Redis', 'Grafana', 'Kubernetes', 'MinIO', 'Rate Limiting', 'Multithreading']
    },
    {
      companyName: 'Enkaizen',
      period: 'Aug 2022 - Oct 2023',
      skills: ['Vue Js', 'Mochito/JUnit', 'Criteria Query', 'Hashicorp', 'JavaScript', 'Docker', 'Django', 'AOP', 'ACID', 'Spring Security']
    },
    {
      companyName: 'Enosis Solutions',
      period: 'March 2022 - Jul 2022',
      skills: ['HTML/CSS', 'Angular', 'EF Core', 'SQL', 'Git', 'ASP.NET', 'Razor Pages']
    },
  ]);
</script>
