<script setup lang="ts">
import FanFactItem from './FanFactItem.vue'
</script>

<template>
  <div class="story">
    <div class="quote">
      <p>
        "Aoba! Bão? Seja bem vindo ao meu site! Aqui você saberá um pouco a mais de mim, minha
        história, minha carreira e alguns projetos que fiz sozinho ou com amigos, espero que goste."
      </p>
    </div>

    <div class="my-skills">
      <h2>Minhas habilidades</h2>
      <p>
        Aqui estão algumas das habilidades que adquiri ao longo da minha carreira como desenvolvedor
        web.
      </p>
      <div class="skills-list">
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Vue.js</span>
        <span>React</span>
        <span>SQL</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Scrum</span>
      </div>
    </div>

    <div class="fan-facts">
      <h2>Curiosidades sobre mim</h2>
      <FanFactItem>
        <template #fan-fact-icon>
          <font-awesome-icon :icon="['fas', 'medal']" class="fan-fact-icon" />
        </template>
        <template #fan-fact-description>
          Gosto muito de praticar qualquer tipo de esportes e competir, já me aventurei no futsal,
          futebol, handebol, voleibol, entre outros.
        </template>
      </FanFactItem>
      <FanFactItem>
        <template #fan-fact-icon>
          <font-awesome-icon :icon="['fas', 'dice']" class="fan-fact-icon" />
        </template>
        <template #fan-fact-description>
          Gosto também de jogos como bets, pebolim, jogos de tabuleiro, etc...
        </template>
      </FanFactItem>
      <FanFactItem>
        <template #fan-fact-icon>
          <font-awesome-icon :icon="['fas', 'fish']" class="fan-fact-icon" />
        </template>
        <template #fan-fact-description>
          Hoje o meu hobby favorito é pescar, isso mesmo, um dev que pesca... pode ser em rios,
          lagos, represas, o importante é o contato com a natureza.
        </template>
      </FanFactItem>
    </div>
  </div>
</template>

<style>
.story {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8%;
}

.quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-left: 4px solid #4caf50;
  padding: 2rem;
  background-color: #2a2a2a;
}

.quote p {
  font-size: 1.5em;
  line-height: 1.4;
  font-style: italic;
  margin: 0;
}

.fan-facts {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
}

.fan-facts h2 {
  font-size: 2em;
  margin: 0;
}

.my-skills {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
}

.my-skills h2 {
  font-size: 2em;
  margin: 0;
}

.skills-list {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
}

.skills-list span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8%;
  background-color: #2a2a2a;
  color: #fff;
}
</style>
