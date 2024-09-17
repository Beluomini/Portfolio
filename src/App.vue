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
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    text-align: left;
    font-size: 1rem;
  }
}
</style>
