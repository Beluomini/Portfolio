<template>
  <section class="main-info">
    <div class="main-info-name">
      <h2>Lucas Beluomini</h2>
    </div>
    <div class="main-info-image">
      <img src="../../assets/images/me.jpeg" alt="Lucas Beluomini" />
    </div>
    <div class="main-info-role">
      <span class="main-info-role-text">Desenvolvedor</span>
      <span class="cursor">|</span>
    </div>
  </section>
</template>

<style>
.main-info {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.main-info-name {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  color: var(--color-heading);
}

.main-info-role {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-heading);
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.main-info-role-text {
  display: inline-block;
  font-family: monospace;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  transition: width 0.5s ease;
}

.main-info-role:hover .main-info-role-text {
  animation: typing 1.5s steps(10) forwards;
  width: auto;
}

.main-info-role .main-info-role-text {
  animation: none;
  width: auto;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s infinite;
}

.main-info-image {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 15%;
  border-radius: 50%;
}

.main-info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

@media (prefers-color-scheme: dark) {
  .main-info {
    padding: 2rem 4rem;
    background-image: url('../../assets/images/dark-background.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (prefers-color-scheme: light) {
  .main-info {
    padding: 2rem 4rem;
    background-image: url('../../assets/images/light-background.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
