<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="content"></slot>
      </p>
    </div>
    <div class="image">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  padding: 0.4rem 2rem;
  margin-bottom: 2rem;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 25rem;
  border-radius: 20%;
  margin-left: 5rem;
  overflow: hidden;
}

.right-story-details {
  flex: 1;
  margin-right: 1rem;
  text-align: justify;
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
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .image {
    display: flex;
    max-width: 100%;
    margin-left: 0;
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
