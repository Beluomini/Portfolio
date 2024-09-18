<script setup lang="ts">
import LeftItem from './StoryItemLeft.vue'
import RightItem from './StoryItemRight.vue'
</script>

<template>
  <LeftItem>
    <template #image>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
        alt="Lucas Beluomini"
      />
    </template>
    <template #title>Primeiros Indicios</template>
    <template #content>
      <p>
        Desde muito pequeno já apresentava indicios que teria afinidade com programação e
        apresentava facilidade com tecnologia.
      </p>
      <p>Gostava de jogar alguns jogos simples como</p>
    </template>
  </LeftItem>

  <RightItem>
    <template #image>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
        alt="Lucas Beluomini"
      />
    </template>
    <template #title>Lógica e Raciocínio</template>
    <template #content>
      <p>
        Sempre fui uma criança muito curiosa e gostava de entender como as coisas funcionavam.
        Gostava de fazer testes de Lógica e Raciocínio, testando minha capacidade de resolver
        problemas.
      </p>
      <p>
        Aos 12 anos, comecei a estudar programação e desenvolvimento de jogos, e foi ai que descobri
        minha paixão por tecnologia.
      </p>
    </template>
  </RightItem>
</template>

<style>
img {
  object-fit: cover;
  border-radius: 20%;
}
</style>
