<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainInfo from './components/header/MainInfo.vue'
import ContactInfo from './components/footer/ContactInfo.vue'
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
  <div class="content">
    <RouterView />
  </div>
  <footer>
    <ContactInfo />
  </footer>
</template>

<style scoped>
header {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

header .wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-link {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
  width: 90%;
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

.content {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  background-color: rgb(27, 27, 27);
}

@media (min-width: 1024px) {
  header {
    margin-bottom: 3rem;
  }

  header .wrapper {
    width: 100%;
  }

  nav {
    width: 80%;
    font-size: 1rem;
  }
}
</style>
