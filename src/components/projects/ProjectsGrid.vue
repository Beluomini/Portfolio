<script setup lang="ts">
import ProjectItem from './ProjectItem.vue';
</script>

<template>
    <div class="projects-grid">
        <a href="https://github.com/Beluomini" target="_blank">
            <ProjectItem>
                <template #project-image>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
                        alt="Lucas Beluomini"
                    />
                </template>
                <template #project-title>Projeto 1</template>
                <template #project-description>
                    Este projeto foi desenvolvido com o intuito de testar as habilidades de desenvolvimento web.
                </template>
            </ProjectItem>
        </a>
        <a href="https://github.com/Beluomini" target="_blank">
            <ProjectItem>
                <template #project-image>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
                        alt="Lucas Beluomini"
                    />
                </template>
                <template #project-title>Projeto 1</template>
                <template #project-description>
                    Este projeto foi desenvolvido com o intuito de testar as habilidades de desenvolvimento web.
                </template>
            </ProjectItem>
        </a>
        <a href="https://github.com/Beluomini" target="_blank">
            <ProjectItem>
                <template #project-image>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
                        alt="Lucas Beluomini"
                    />
                </template>
                <template #project-title>Projeto 1</template>
                <template #project-description>
                    Este projeto foi desenvolvido com o intuito de testar as habilidades de desenvolvimento web.
                </template>
            </ProjectItem>
        </a>
        <a href="https://github.com/Beluomini" target="_blank">
            <ProjectItem>
                <template #project-image>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
                        alt="Lucas Beluomini"
                    />
                </template>
                <template #project-title>Projeto 1</template>
                <template #project-description>
                    Este projeto foi desenvolvido com o intuito de testar as habilidades de desenvolvimento web.
                </template>
            </ProjectItem>
        </a>
        <a href="https://github.com/Beluomini" target="_blank">
            <ProjectItem>
                <template #project-image>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
                        alt="Lucas Beluomini"
                    />
                </template>
                <template #project-title>Projeto 1</template>
                <template #project-description>
                    Este projeto foi desenvolvido com o intuito de testar as habilidades de desenvolvimento web.
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

}
</style>