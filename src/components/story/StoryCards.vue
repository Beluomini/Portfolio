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
      <p>
        O ano era 2004 e eu gostava de jogar alguns jogos virtuais offline em um PC "branco" com mouse de bolinha um processador duvidoso e rodando um windows de janelas cinzas.
      </p>
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
        Os jogos eram simples mas me divertiam muito na época, mesmo que com gráficos 
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
