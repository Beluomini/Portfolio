<template>
  <div class="project-item">
    <div class="project-image">
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

.project-image {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  border-radius: 20%;
  margin-bottom: 1rem;
  height: 10rem;
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

@media (max-width: 1023px) {
  .project-item {
    padding: 0.4rem;
  }

  .project-details h3 {
    font-size: 1.2rem;
  }

  .project-details p {
    font-size: 0.6rem;
  }
}
</style>
