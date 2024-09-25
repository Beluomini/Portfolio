<template>
  <div class="contact-info">
    <div class="contact-info__item">
      <p>
        <a href="mailto:lucasbeluomini1@gmail.com" target="_blank">
          Email
          <i class="fas fa-envelope"></i>
        </a>
      </p>
    </div>
    <div class="contact-info__item">
      <p>
        <a href="https://www.linkedin.com/in/lucas-beluomini/" target="_blank">
          LinkedIn
          <i class="fab fa-linkedin"></i>
        </a>
      </p>
    </div>
    <div class="contact-info__item">
      <p>
        <a href="https://github.com/Beluomini" target="_blank">
          GitHub
          <i class="fab fa-github"></i>
        </a>
      </p>
    </div>
  </div>
</template>

<style>
.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.contact-info__item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.contact-info__item a {
  display: inline-block;
  color: var(--color-text);
  text-decoration: none;
}
</style>
