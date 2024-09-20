<template>
  <section class="main-info">
    <div class="main-info-name">
      <h2>Lucas Beluomini</h2>
    </div>
    <div class="main-info-image">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"
        alt="Lucas Beluomini"
      />
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
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.main-info-image img {
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
