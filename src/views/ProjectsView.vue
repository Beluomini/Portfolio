<script setup lang="ts">
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue';
</script>

<template>
  <main>
    <ProjectsGrid />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
}
</style>