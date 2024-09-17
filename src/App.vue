<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Sobre</RouterLink>
        <RouterLink to="/story">História</RouterLink>
        <RouterLink to="/projects">Projetos</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header .wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-heading);
  border-bottom: 2px solid var(--color-heading);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0.5rem;
  display: inline-block;
  color: var(--color-text);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
    padding: 1rem 0;
    background-color: var(--vt-c-green-dark-2);
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  nav {
    display: flex;
    justify-content: space-around;
    width: 80rem;
    text-align: left;
    font-size: 1rem;
  }
}
</style>
