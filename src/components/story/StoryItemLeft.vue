<template>
  <div class="item">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="details">
      <h3>
        <slot name="title"></slot>
      </h3>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 0;
  padding: 0.4rem 2rem;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 25rem;
  border-radius: 20%;
  margin-right: 5rem;
  overflow: hidden;
}

.left-story-details {
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (max-width: 768px) {
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .image {
    display: flex;
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }

  .left-story-details {
    margin-left: 0;
  }

  .details {
    text-align: justify;
    font-size: 0.8rem;
  }

  .details h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
}
</style>
