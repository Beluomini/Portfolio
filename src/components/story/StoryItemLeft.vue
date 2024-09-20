<template>
  <div class="item">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="details">
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.image {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 20rem;
  flex-grow: 1;
  border-radius: 20%;
  margin-right: 5rem;
}

.details {
  flex: 1;
  margin-left: 1rem;
  text-align: justify;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem calc(var(--section-gap) / 2);
  }
}
</style>
