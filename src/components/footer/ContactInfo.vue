<template>
  <div class="contact-info">
    <div class="contact-info__item">
      <p>
        <a href="https://www.linkedin.com/in/lucas-beluomini/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          LinkedIn
        </a>
      </p>
    </div>
    <div class="contact-info__item">
      <p>
        <a href="https://github.com/Beluomini" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
          GitHub
        </a>
      </p>
    </div>
  </div>
</template>

<style>
.contact-info {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.contact-info__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.contact-info__item a {
  display: inline-block;
  color: var(--color-text);
  text-decoration: none;
}
</style>
