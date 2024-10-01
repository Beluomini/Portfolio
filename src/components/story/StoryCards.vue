<script setup lang="ts">
import LeftItem from './StoryItemLeft.vue'
import RightItem from './StoryItemRight.vue'
</script>

<template>
  <LeftItem>
    <template #image>
      <img src="../../assets/images/first-steps.jpg" alt="Primeiros Indicios" />
    </template>
    <template #title>Primeiros Indicios</template>
    <template #content>
      <p>
        Desde muito pequeno já apresentava indicios que teria afinidade com programação e
        apresentava facilidade com tecnologia.
      </p>
      <p>
        O ano era 2004 e eu gostava de jogar alguns jogos virtuais offline em um PC "branco" com
        mouse de bolinha um processador duvidoso e rodando um windows de janelas cinzas.
      </p>
      <p>
        Os jogos eram simples mas me divertiam muito na época, mesmo que com gráficos não tão bons
        (para os dias de hoje).
      </p>
      <p>
        Vou deixar abaixo uma lista de imagens de jogos que me marcaram na infância e que eu ficava
        horas jogando mesmo antes dos 8 anos.
      </p>
    </template>
  </LeftItem>

  <RightItem>
    <template #image>
      <img src="../../assets/images/crazy.jpg" alt="Lucas Beluomini" />
    </template>
    <template #title>Lógica e Raciocínio</template>
    <template #content>
      <p>
        Desde muito pequeno apresentei gosto por desafios de lógica e de matemática, gostava de
        entender coisas que me surpreendiam e me faziam pensar.
      </p>
      <p>
        Meus pais sempre compravam revistas de passatempos e eu adorava resolver. Eu era muito novo
        pra saber, mas, talvez, esses pequenos atos tenham me influenciado a seguir a carreira de
        programador.
      </p>
    </template>
  </RightItem>

  <LeftItem>
    <template #image>
      <img src="../../assets/images/skate.jpg" alt="Primeiros Indicios" />
    </template>
    <template #title>Outras paixões</template>
    <template #content>
      <p>
        Apesar de ter esse lado curioso nunca gostei de estudar conteúdos que não me interessavam,
        portanto me apoiei em outras paixões, uma delas foi o esporte.
      </p>
      <p>
        Gostava de praticar absolutamente tudo, começou com o futsal e futebol, como todo bom
        brasileiro, mas logo me apaixonei pelo skate e em seguida pelo handebol.
      </p>
      <p>
        Gostava de praticar absolutamente tudo, começou com o futsal e futebol, como todo bom
        brasileiro, mas logo me apaixonei pelo skate e em seguida pelo handebol.
      </p>
    </template>
  </LeftItem>
</template>

<style>
img {
  width: 100%;
  height: 100%;
}
</style>
