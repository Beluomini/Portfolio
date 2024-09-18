<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainInfo from './components/MainInfo.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <MainInfo />
      <nav>
        <div class="nav-link">
          <RouterLink to="/">Sobre mim</RouterLink>
        </div>
        <div class="nav-link">
          <RouterLink to="/story">Minha história</RouterLink>
        </div>
        <div class="nav-link">
          <RouterLink to="/projects">Meus projetos</RouterLink>
        </div>
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
    width: 80%;
    text-align: left;
    font-size: 1rem;
  }

  .nav-link {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  nav a {
    padding: 0.5rem;
    display: inline-block;
    color: var(--color-text);
  }
}
</style>
