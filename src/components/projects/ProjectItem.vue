<template>
  <div class="project-item">
    <div class="image">
      <slot name="project-image"></slot>
    </div>
    <div class="project-details">
      <h3>
        <slot name="project-title"></slot>
      </h3>
      <p>
        <slot name="project-description"></slot>
      </p>
    </div>
  </div>
</template>

<style>
.project-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8%;
}

.image {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 20rem;
  flex-grow: 1;
  border-radius: 20%;
  margin-bottom: 1rem;
}

.project-details h3 {
  flex: 1;
  font-size: 1.5rem;
  color: var(--color-heading);
  text-align: center;
}

.project-details p {
  flex: 1;
  font-size: 0.8rem;
  text-align: center;
}
</style>
