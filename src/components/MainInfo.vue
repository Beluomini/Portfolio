<template>
  <section class="main-info">
    <div class="main-info-name">
      <h2>Lucas Beluomini</h2>
    </div>
    <div class="main-info-image">
      <img src="../assets/images/me.jpeg" alt="Lucas Beluomini" />
    </div>
    <div class="main-info-role">
      <h2>Desenvolvedor</h2>
    </div>
  </section>
</template>

<style>
.main-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 1.5rem 0 1.5rem 0;
  align-items: center;
}

.main-info-name {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-heading);
}

.main-info-image {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
}

.main-info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

.main-info-role {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-heading);
}
</style>
