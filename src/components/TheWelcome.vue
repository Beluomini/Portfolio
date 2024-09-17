<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Experiência Profissional</template>

    Meu <a href="https://www.linkedin.com/in/lucas-beluomini/" target="_blank" rel="noopener">Linkedin</a>
    mostra um pouco mais sobre minha experiência profissional.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Escolaridade</template>

    Sou bacharel em Ciência da Computação.
  </WelcomeItem>
</template>
