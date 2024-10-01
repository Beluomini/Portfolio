<script setup lang="ts">
import ProjectItem from './ProjectItem.vue'
</script>

<template>
  <div class="projects-grid">
    <a href="https://github.com/Beluomini/Rotulus" target="_blank">
      <ProjectItem>
        <template #project-image>
          <img
            src="https://github.com/Beluomini/Rotulus/raw/main/mobile/src/assets/rotulus-icon.png"
            alt="Rotulus"
          />
        </template>
        <template #project-title>Rotulus</template>
        <template #project-description>
          Este projeto foi desenvolvido em 2023 para o meu trabalho de conclusão de curso em
          Bacharelado em Ciência da Computação. Ele tem o objetivo de facilitar a vida de
          consumidores ao fazerem melhores escolhas no momento da compra
        </template>
      </ProjectItem>
    </a>
    <a href="https://github.com/Beluomini/U-Zuum" target="_blank">
      <ProjectItem>
        <template #project-image>
          <img
            src="https://github.com/Beluomini/U-Zuum/raw/master/assets/uzuumFoto.png"
            alt="U Zuum"
          />
        </template>
        <template #project-title>U Zuum</template>
        <template #project-description>
          Em parceria com dois amigos, e em nome do Uzum, desenvolvemos, em 2018, um jogo web com o
          intuito de concientizar as pessoas a respeito do cuidado e dos perigos da dengue.
        </template>
      </ProjectItem>
    </a>
    <a href="https://github.com/Beluomini/SewerScapeGame" target="_blank">
      <ProjectItem>
        <template #project-image>
          <img
            src="https://github.com/Beluomini/SewerScapeGame/raw/master/assets/inicio.png"
            alt="Sewer Scape"
          />
        </template>
        <template #project-title>Sewer Scape</template>
        <template #project-description>
          Desenvolvido em 2017, este jogo foi feito juntamente com dois colegas do ensino médio. O
          jogo tem como objetivo a concientização sobre inclusão social. O jogo é de plataforma e
          web.
        </template>
      </ProjectItem>
    </a>
    <a href="https://github.com/Beluomini/AAP-folou" target="_blank">
      <ProjectItem>
        <template #project-image>
          <img
            src="https://github.com/Beluomini/AAP-folou/raw/main/mobile/assets/aapfolou.png"
            alt="AAP Folou"
          />
        </template>
        <template #project-title>AAP Folou</template>
        <template #project-description>
          Desenvolvido em 2021, este aplicativo foi feito para a disciplina de Construção de
          Software. Em parceria com um colega, desenvolvemos um aplicativo mobile para ajudar a
          comunicação entre os pet-shops e os pais de pets.
        </template>
      </ProjectItem>
    </a>
    <a href="https://github.com/Beluomini/mini-compiler" target="_blank">
      <ProjectItem>
        <template #project-image>
          <img src="../../assets/images/mini-compiler.png" alt="Mini Compiler" />
        </template>
        <template #project-title>Mini Compiler</template>
        <template #project-description>
          Durante o ultimo semestre da faculdade, em 2023, desenvolvi um compilador em C. O objetivo
          era que o compilador fizesse e análise léxica e sintática da linguagem criada. Pude também
          iniciar a análise semântica e a geração de código.
        </template>
      </ProjectItem>
    </a>
    <a href="https://github.com/Beluomini/AssemblyCRUD" target="_blank">
      <ProjectItem>
        <template #project-image>
          <img src="../../assets/images/assembly.png" alt="Assembly CRUD" />
        </template>
        <template #project-title>Assembly CRUD</template>
        <template #project-description>
          Em 2023, na graduação, desenvolvi um CRUD em Assembly para a matéria de Programação de
          Interfaçe de Hardware e Software. O objetivo era que o programa fizesse a leitura e
          escrita de arquivos, além de manipular os dados de forma eficiente.
        </template>
      </ProjectItem>
    </a>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding: 0.4rem 2rem;
  }

  .projects-grid a {
    text-decoration: none;
    color: var(--color-text);
    border-radius: 8%;
  }

  .projects-grid img {
    width: 100%;
    height: 100%;
    max-height: 10rem;
    border-radius: 8%;
  }
}
</style>
